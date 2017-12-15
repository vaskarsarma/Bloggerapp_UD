var express = require("express");
var router = express.Router();
module.exports = router;
var log = require("../modellayer/log");
var _ = require("lodash");
var verifyemail = require('../modellayer/verifyemail');
var config = require("config");
var nodemailer = require('nodemailer');
var formidable = require('formidable');
var fs = require('fs');
var handlebars = require("handlebars");

router.get('/', function(req, res) {
    var userid = req.query.i;
    verifyemail.verifyemail(userid).then(function(results) {
        console.log("1 " + results.data.state);
        var data = { state: results.data.state };
        res.render('emailverified', { layout: 'default', title: 'Email Verification Page', state: data });
    }).catch(function(err) {
        var data = { state: "0" };
        res.render('emailverified', { layout: 'default', title: 'Email Verification Page', state: data });
        //res.status(500).send();
    });
});

router.post('/triggeremail', function(req, res) {
    if (req.url == '/triggeremail') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var userid = fields.hnduserid;
            var emailid = fields.hndemailid;
            var name = fields.hndusername;

            var service = config.get("nodeMailer.service");
            var uid = config.get("nodeMailer.user");
            var pwd = config.get("nodeMailer.pass");

            var htmlpath = "./public/template/verifymailid.html";

            readHTMLFile(htmlpath, function(err, html) {
                if (err) {
                    console.log("readHTMLFile erorr : " + err);
                    log.logger.error("readHTMLFile erorr : " + err);
                    res.json(false);
                } else {
                    var template = handlebars.compile(html);

                    var DT = new Date().toISOString();
                    path = config.get("app.webserver.protocol") + "://" +
                        config.get("app.webserver.host") + ":" +
                        config.get("app.webserver.port") + "/verifyemail?i=" +
                        userid + "&ts=" + DT;

                    var replacements = {
                        name: name,
                        url: path
                    };

                    var htmlToSend = template(replacements);
                    //console.log(htmlToSend);

                    var mailOptions = {
                        from: uid,
                        to: emailid,
                        subject: 'Verify email id',
                        html: htmlToSend
                    };

                    var transporter = nodemailer.createTransport({
                        service: service,
                        auth: {
                            user: uid,
                            pass: pwd
                        }
                    });

                    transporter.sendMail(mailOptions, function(error, response) {
                        if (error) {
                            console.log("error");
                            res.json(false);
                        } else {
                            console.log("mail sent success");

                            verifyemail.triggerverificationemail(userid, DT).then(function(results) {
                                res.json(true);
                            }).catch(function(err) {
                                res.json({ "Error": "verifyemailtrigger api error" });
                            });
                        }
                    });
                }
            });

            // var nodemailer = require('nodemailer');
            // var transporter = nodemailer.createTransport({
            //     service: service,
            //     auth: {
            //         user: uid,
            //         pass: pwd
            //     }
            // });

            // var DT = new Date().toISOString();
            // path = config.get("app.webserver.protocol") + "://" +
            //     config.get("app.webserver.host") + ":" +
            //     config.get("app.webserver.port") + "/verifyemail?i=" +
            //     userid + "&ts=" + DT;

            // var mailOptions = {
            //     from: uid,
            //     to: emailid,
            //     subject: 'Verify email id',
            //     text: "Please click here to verify email " + path
            // };

            // transporter.sendMail(mailOptions, function(error, info) {
            //     if (error) {
            //         console.log("mail sent error: " + error);
            //         res.json(false);
            //     } else {
            //         console.log("mail sent success");

            //         verifyemail.triggerverificationemail(userid, DT).then(function(results) {
            //             res.json(true);
            //         }).catch(function(err) {
            //             res.json({ "Error": "verifyemailtrigger api error" });
            //         });
            //     }
            // });
        });
    }
    return;
});

var readHTMLFile = function(path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function(err, html) {
        if (err) {
            throw err;
            callback(err);
        } else {
            callback(null, html);
        }
    });
};