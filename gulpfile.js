// plugins
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var gulp   = require('gulp');

var dist = 'dist/';
var app = dist + 'angular-eonasdan-datetimepicker.js';
var minApp = 'angular-eonasdan-datetimepicker.min.js';

// tasks
gulp.task('lint', function () {
    return gulp.src(app)
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

gulp.task('default', ['lint', 'minify'], function () {
    gulp.watch([app], ['lint', 'minify']);
});