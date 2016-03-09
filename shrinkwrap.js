//var npmShrinkwrap = require("npm-shrinkwrap");
//var github = require("Github");
var npm = require("npm");

var simple = require("simple-git");

var latestTagName;
var git = simple();

git.then(function () {
        console.log("checking out latest tag");
    })
    .tags(function(err, tags) {
        latestTagName = tags.all[0];
    })
    .checkout("v0.0.0", function (err) {
        console.log("Checkout tag done:"+latestTagName);
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
    //.add(["somefile.js"])
    //.commit("adding somefile.json")
    //.push('origin', latestTagName)
    .then(function () {
        //grunt.log("error while shrinkwrapping: " + err.message);
        console.log("done");
    });

//module.export = {
//    doShrinkWrap: doShrinkWrap
//};
