//var npmShrinkwrap = require("npm-shrinkwrap");
//var github = require("Github");
var npm = require("npm");

var simple = require("simple-git");

function doShrinkWrap(grunt) {
    var latestTagName;
    var git = simple();
    git.then(function () {
            grunt.log("checking out latest tag");
        })
        .tags(function(err, tags) {
            latestTagName = tags.latest;
        })
        .checkoutLatestTag(function () {
            grunt.log("Checkout tag done");
        })
        .then(function () {
            npm.load({
                prefix: process.cwd(),
                dev: true,
                loglevel: 'error'
            }, function (er) {
                if (er) {
                    throw er;
                }
                npm.commands.shrinkwrap({}, true, function (er) {
                    if (er) {
                        throw er;
                    }
                    // command succeeded, and data might have some info
                    grunt.log("Finished shrinkwrap");
                });
            });
        })
        .add(["npm-shrinkwrap.json"])
        .commit("adding npm-shrinkwrap.json")
        .push('origin', latestTagName)
        .then(function () {
            //grunt.log("error while shrinkwrapping: " + err.message);
            grunt.log("done");
        });
}
////TODO: test - remove
//doShrinkWrap({
//    log: console.log,
//    fatal: console.log
//});
var latestTagName;
var git = simple();

git.then(function () {
        console.log("checking out latest tag");
    })
    .tags(function(err, tags) {
        latestTagName = tags.latest;
    })
    .checkoutLatestTag(function () {
        console.log("Checkout tag done");
    })
    .then(function () {
        console.log("did some shit");
        //npm.load({
        //    prefix: process.cwd(),
        //    dev: true,
        //    loglevel: 'error'
        //}, function (er) {
        //    if (er) {
        //        throw er;
        //    }
        //    npm.commands.shrinkwrap({}, true, function (er) {
        //        if (er) {
        //            throw er;
        //        }
        //        // command succeeded, and data might have some info
        //        grunt.log("Finished shrinkwrap");
        //    });
        //});
    })
    .add(["somefile.js"])
    .commit("adding somefile.json")
    .push('origin', latestTagName)
    .then(function () {
        //grunt.log("error while shrinkwrapping: " + err.message);
        console.log("done");
    });

//module.export = {
//    doShrinkWrap: doShrinkWrap
//};
