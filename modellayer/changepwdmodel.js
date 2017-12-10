"use strict";
var axios = require("axios");
var config = require("config");
var bcrypt = require('bcrypt');
//var log = require("./log");
const serviceURL = config.get("app.restAPIEndpoint.v1ContractPath");

exports.category = require("../data/blogcategory.json");

exports.findUser = function(id) {
    let path = serviceURL + "/findone/" + "users" + "/" + id;
    console.log(" findUser model Step 1 ,path:" + path);
    return new Promise(function(resolve, reject) {
        axios.get(path).then(function(response) {
                console.log(" findUser model Step 1.2,Success:");
                resolve(response);
            })
            .catch(function(error) {
                reject(error);
            });
    });
}

exports.vaidateURL = function(id) {
    let path = serviceURL + "/findone/" + "fpwdemailtrigger" + "/" + id;
    console.log(" findUser model Step 1 ,path:" + path);
    return new Promise(function(resolve, reject) {
        axios.get(path).then(function(response) {
                console.log(" findUser model Step 1.2,Success:");
                resolve(response);
            })
            .catch(function(error) {
                reject(error);
            });
    });
}

exports.updatePassword = function(id, pwd) {
    let path = serviceURL + "/updatepassword"; // + "users" + "/" + id;
    console.log("updatePassword model step 1");
    var result = {
        "userid": id,
        "pwd": bcrypt.hashSync(pwd, 10)
    };
    console.log("updatePassword model step 2, result:" + JSON.stringify(result));
    return new Promise(function(resolve, reject) {
        axios.post(path, result).then(function(response) {
                console.log("updatePassword model step 3, success:" + response);
                resolve(response);
            })
            .catch(function(error) {
                var err = { "Error": error };
                console.log("updatePassword model step 4, error:" + err);
                reject(err);
            });
    });
}

exports.validatePassword = function(cupwd, oldPwd) {

    console.log(cupwd + " , " + oldPwd);

    return new Promise(function(resolve, reject) {
        bcrypt.compare(oldPwd, cupwd, function(err, res) {
            if (res) {
                console.log("validatePassword common step 2, pwd match");
                resolve(true);
            } else {
                console.log("validatePassword common step 3, pwd not match");
                reject(false);
            }
        });
    });
}

exports.triggerfpwdemail = (userid, DT) => {
    let path = serviceURL + "/triggerfpwdemail/";
    console.log("path:" + path);

    var data = {
        "userid": userid,
        "dt": DT
    };

    return new Promise(function(resolve, reject) {
        axios.post(path, data)
            .then(function(response) {
                console.log("api response:" + response);
                resolve(response);
            })
            .catch(function(error) {
                var err = { "Error": error };
                console.log("api error:" + error);
                reject(err);
            });
    });
}

exports.verifyfpwdemail = (userid) => {
    let path = serviceURL + "/verifyfpwdemail/" + userid;
    console.log("path:" + path);

    return new Promise(function(resolve, reject) {
        axios.get(path).then(function(response) {
                log.logger.info("Model layer verifyfpwdemail method : service call : success");
                resolve(response);
            })
            .catch(function(error) {
                var err = { "Error": error };
                log.logger.error("Model layer verifyfpwdemail method : service call : error : " + error);
                reject(err);
            });
    });
}