'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('serve', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:9080",
        files: ["app/**/*.js"],
        browser: "google chrome",
        port: 9090,
    });
});
gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: 'server.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});