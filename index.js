'use strict';
var express = require("express");
var app = express();
var path = require("path");
var exphbs = require("express-handlebars");
var bodyparser = require("body-parser");
var config = require("config");
var log = require("./modellayer/log");
var _ = require("lodash");
var flash = require('connect-flash');
app.locals.config = config.get('app.restAPIEndpoint.v1ContractPath');
console.log(app.locals.config);

// parse application/json
app.use(bodyparser.json({limit: '50mb'}));

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'profilephoto')));

var hbs = exphbs.create({
    defaultLayout: 'default',
    helpers: {
        IsAdmin: require("./public/js/helper/isadmin"),
        CheckIsAdmin: require("./public/js/helper/checkisadmin"),
        Compare: require("./public/js/helper/compare"),
        ValidateBlogs: require("./public/js/helper/validateBlogs"),
        CovertISODate: require("./public/js/helper/convertisodate"),
        CreateDropDown: require("./public/js/helper/createdropdown"),
        ShowDate: require("./public/js/helper/converttolocaldate")
    },
    partialsDir: ['views/partials/']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

require("./passport/init");

// Configuring Passport
var passport = require("passport");
var expressSession = require('express-session');

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// let authenticationMiddleware = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         res.locals.user = req.user;
//         return next();
//     }
//     res.redirect('/');
// };

let authenticationMiddleware = function(req, res, next) {
    res.locals.errorMsg = req.flash('error')[0];
    res.locals.successMsg = req.flash('success')[0];
    // if (res.locals.errorMsg != "")
    //     console.log("**** ErrorMsg found" + JSON.stringify(res.locals.errorMsg));
    // else
    //     console.log("****ErrorMsg not found" + JSON.stringify(res.locals.errorMsg));
    // console.log("***req.session.mappingObj :" + JSON.stringify(req.session.mappingObj));
    // console.log("**************start******************");
    // console.log("start req.session.redirectUrl:" + req.session.redirectUrl);
    if (req.session) {
        // console.log("***user is visiting :" + req.session.userVisit);
        // console.log("req.headers.referer:" + req.headers.referer);
        // console.log("req.originalUrl:" + req.originalUrl);
        // console.log("req.url:" + req.url);
        req.session.redirectUrl = req.originalUrl || req.url;
    }
    // console.log("end req.session.redirectUrl:" + req.session.redirectUrl);
    // console.log("**************end******************");
    if (req.isAuthenticated()) {
        // console.log("*****user Authenticated");
        res.locals.user = req.session.user;
        return next();
    }
    req.session.userVisit = req.session.userVisit != null ? ++(req.session.userVisit) : 1;

    res.redirect('/');
};

let authNotRequired = (req, res, next) => {
    res.locals.errorMsg = req.flash('error')[0];
    res.locals.successMsg = req.flash('success')[0];

    // if (res.locals.errorMsg != "")
    //     console.log("---- ErrorMsg found" + JSON.stringify(res.locals.errorMsg));
    // else
    //     console.log("----ErrorMsg not found" + JSON.stringify(res.locals.errorMsg));
    //if (req.flash('messages')[0])
    //  console.log("----1," + JSON.stringify(req.flash('error')));
    //  console.log("----2," + JSON.stringify(res.locals.messages));
    //console.log("---req.session.mappingObj :" + JSON.stringify(req.session.mappingObj));
    // req.session.returnTo = req.path;
    //console.log("req.path1:" + req.path);
    // console.log("---------------start---------------------");
    // console.log("start 1req.session.redirectUrl:" + req.session.redirectUrl);
    if (req.isAuthenticated()) {
        // console.log("-----user Authenticated");
        //console.log("--req.session.user:" + JSON.stringify(req.session.user));
        res.locals.user = req.session.user;
        req.session.userVisit += 1;
    } else {
        req.session.userVisit = req.session.userVisit != null ? ++(req.session.userVisit) : 1;
    }
    // if (req.session) {
    //     console.log("1---user is visiting :" + req.session.userVisit);
    //     console.log("1req.headers.referer:" + req.headers.referer);
    //     console.log("1req.originalUrl:" + req.originalUrl);
    //     console.log("1req.url:" + req.url);
    //     // req.session.redirectUrl = req.originalUrl || req.url;
    //     console.log("end 1req.session.redirectUrl:" + req.session.redirectUrl);
    //     console.log("----------------end--------------------");
    // }


    next();
};

app.get('/', authNotRequired, function(req, res) {
    var blogs = {};
    var blog = require("./modellayer/blogs");
    var categoryList = blog.category;

    res.render('home', {
        layout: 'default',
        title: 'Home Page',
        category: categoryList
    });
});

app.get('/listblog/:blogCategory', authNotRequired, function(req, res) {

    var blogs = {};
    var blog = require("./modellayer/blogs");
    var blogCategory = req.params.blogCategory;
    var categoryList = blog.category;

    blog.blogs("0", blogCategory).then(function(response) {
        blogs = response.data;

        log.logger.info("Home Page : retrieve blogs : blogs count " + blogs.count);

        var lastblogid = "0";
        _.forEach(blogs.result, function(result) {
            lastblogid = result._id
        });

        res.render('listblog', {
            layout: 'default',
            title: 'Blog List',
            blogs: blogs,
            blogCID: blogCategory,
            lastblogid: lastblogid,
            categorylist: categoryList
        });
    }).catch(function(err) {
        log.logger.error("Home Page : failed to retrieve blogs : error " + err);
        blogs = { "result": [], "count": 0 };
        res.render('listblog', {
            layout: 'default',
            title: 'Blog List',
            blogs: blogs,
            blogCID: blogCategory,
            lastblogid: "0",
            categorylist: categoryList
        });
    });
});

var myprofileroute = require('./modellayer/myprofile');
app.use("/myprofile", authenticationMiddleware, myprofileroute);

var blogroute = require('./controllers/blog');
app.use("/blogs", authenticationMiddleware, blogroute);

var viewblogroute = require('./controllers/viewblog');
app.use("/viewblog", authNotRequired, viewblogroute);

var authRouter = require('./controllers/authroute');
app.use('/auth', authNotRequired, authRouter);

// app.get('/dashboard', authenticationMiddleware, function(req, res) {
//     res.render('dashboard', { layout: 'default', title: 'Dashboard Page' });
// });

var CommonAPI = require('./modellayer/commonAPI');
app.use('/commonapi', CommonAPI);

var userregistration = require('./controllers/userregistration');
app.use('/auth', authNotRequired, userregistration);

var forgotPwd = require('./controllers/forgotPwd');
app.use('/auth', authNotRequired, forgotPwd);

var changepwdCtrl = require('./controllers/changepwdCtrl');
app.use('/auth', authNotRequired, changepwdCtrl);

var dashboardCtrl = require('./controllers/dashboardCtrl');
app.use('/auth', authenticationMiddleware, dashboardCtrl);

var verifyemail = require('./controllers/verifyemail');
app.use('/verifyemail', authNotRequired, verifyemail);

var contactus = require('./controllers/contactus');
app.use('/contactus', authNotRequired, contactus);

// var aboutus = require('./controllers/aboutus');
// app.use('/aboutus', authNotRequired, aboutus);

//Error handling
app.get('*', authNotRequired, function(req, res, next) {
    var err = new Error("Failed to load resource");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    if (err.status == 404) {
        res.status(404);
        res.render('404error', { layout: 'default', title: '404 Page' });
        return true;
    } else
        next();
});

process.on('uncaughtException', function(err) {
    console.log("uncaughtException:" + err);
    log.logger.error(err);
});

var port = 2000;
app.listen(port, function() {
    console.log("Test - Server started at port " + port);
});