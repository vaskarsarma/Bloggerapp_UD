var express = require("express");
var router = express.Router();
module.exports = router;
var log = require("../modellayer/log");
var _ = require("lodash");
var blogger = require('../modellayer/blogs');

var categoryList = blogger.category;

//Status 
var status = require('../data/blogstatus.json');

//Get Blog added by an user
router.get('/profile/:_id', function(req, res) {

    var blogs = {};
    var userid = req.params._id;

    if (userid == req.session.user._id) {
        Promise.all([
            blogger.blogsbyuserid(userid, "0"),
            blogger.blogsnamebyuserid(userid)
        ]).then(data => {
            var blogs = data[0].data;
            var blogslist = data[1].data;

            log.logger.info("Blogger Page : retrieve blogs : blogs count " + blogs.count);

            var lastblogid = "0";
            _.forEach(blogs.result, function(result) {
                lastblogid = result._id
            });

            res.render('blogs', {
                title: 'Blogs',
                category: categoryList,
                blogs: blogs,
                lastblogid: lastblogid,
                blogslist: blogslist.result
            });
        }).catch(function(err) {
            res.status(500).send();
        });
    } else {
        res.redirect('/');
    }
});

router.post('/profile', function(req, res) {

    var blogs = {};
    var blogslist = {};
    var lcid = req.body.lastblogid;
    var userid = req.body.userid;

    console.log("1");

    if (userid == req.session.user._id) {
        Promise.all([
            blogger.blogsbyuserid(userid, lcid),
            blogger.blogsnamebyuserid(userid)
        ]).then(data => {
            blogs = data[0].data;
            blogslist = data[1].data;

            console.log("2");

            //console.log(JSON.stringify(blogslist));

            log.logger.info("Blogger Page : retrieve blogs : blogs count " + blogs.count);

            var lastblogid = "0";
            _.forEach(blogs.result, function(result) {
                lastblogid = result._id
            });

            var data = {};
            data = {
                "category": categoryList,
                "blogs": blogs,
                "lastblogid": lastblogid,
                "blogslist": blogslist.result
            };
            res.json(data);
        }).catch(function(err) {
            blogs = { "result": [], "count": 0 };
            blogslist = { "result": [], "count": 0 };
            data = { "category": categoryList, "blogs": blogs, "lastblogid": lcid, "blogslist": blogslist.result };
            res.json(data);
        });
    } else {
        res.redirect('/');
    }
});

//================== add blog =================
router.post("/savedata/add", function(req, res) {

    if (req.url == '/savedata/add') {
        var topic = req.body.topic;
        var content = req.body.content;
        var category = req.body.category;
        var prevblogid = req.body.prevblogid;
        var nextblogid = req.body.nextblogid;
        var userid = req.body.userid;
        var createdby = req.body.createdby;

        var isValid = (topic != null && content != null && category != null && createdby != null && userid != null);

        if (isValid) {
            var data = {
                "topic": topic,
                "content": content,
                "category": category,
                "userid": userid,
                "createdby": createdby,
                "prevblogid": prevblogid,
                "nextblogid": nextblogid
            }

            blogger.addblog(data).then(function(results) {

                res.json(true);

            }).catch(function(err) {

                console.log(err);
                res.json(false);

            });

        } else {
            log.logger.error("Model layer blogs : updateaboutme call : error : data not define");
            res.json({ "Error": "data not define" });
        }
    }
    return;
});

//================== edit blog =================
router.post("/savedata/edit", function(req, res) {

    if (req.url == '/savedata/edit') {
        var _id = req.body._id;
        var topic = req.body.topic;
        var content = req.body.content;
        var category = req.body.category;
        var prevblogid = req.body.prevblogid;
        var nextblogid = req.body.nextblogid;
        var userid = req.body.userid;
        var createdby = req.body.createdby;

        var isValid = (topic != null && content != null && category != null && userid != null);

        if (isValid) {
            var data = {
                "_id": _id,
                "topic": topic,
                "content": content,
                "categorykey": category,
                "prevblogid": prevblogid,
                "nextblogid": nextblogid,
                "userid": userid
            }

            blogger.editblog(data).then(function(results) {

                res.json(true);

            }).catch(function(err) {

                console.log(err);
                res.json(false);

            });

        } else {
            console.log("data unavailable");
            log.logger.error("Model layer blogs : editblog call : error : data not define");
            res.json({ "Error": "data not define" });
        }
    }
    return;
});

//================== Delete Blog =================
router.get('/delete/:_id/:userid', function(req, res) {

    var id = req.params._id;
    var userid = req.params.userid;

    blogger.deleteblogbyblogid(id, userid).then(function(response) {

        res.json(true);

    }).catch(function(err) {
        console.log(err);

        res.json(false);
    });
});