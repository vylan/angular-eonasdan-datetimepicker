// plugins
var debug = require('gulp-debug');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

var dist = 'dist/';
var examples = 'examples/';
var html = '*.html';
var js = '*.js';

var app = dist + 'angular-eonasdan-datetimepicker.js';
var minApp = 'angular-eonasdan-datetimepicker.min.js';

// tasks
gulp.task('lint', function () {
    return gulp.src([app, examples + js])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minify', function () {
    return gulp.src(app)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename(minApp))
        .pipe(gulp.dest(dist));
});

// main tasks
gulp.task('dist', ['lint', 'minify'], function () {
});

gulp.task('default', function (cb) {
    runSequence(['lint', 'minify'], cb);
    gulp.watch([app], ['lint', 'minify']);
});

// testing
gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            directoryListing: true
        }));
});
