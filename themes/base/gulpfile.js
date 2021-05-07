'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('css', function (done) {
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('static/css'))
    .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', gulp.series('css'));
    gulp.watch('assets/scss/*.scss', gulp.series('css'));
});