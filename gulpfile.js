var gulp = require('gulp'),
  clean = require('gulp-clean'),
  jshint = require('gulp-jshint'),
  Server = require('karma').Server,
  concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  concatCss = require('gulp-concat-css'),
  uglifycss = require('gulp-uglifycss'),
  sass = require('gulp-sass'),
  connectlivereload = require('connect-livereload'),
  express = require('express'),
  path = require('path'),
  watch = require('gulp-watch'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('clean-dist', function () {
  return gulp.src('dist/*', {read: false})
  .pipe(clean());
});

gulp.task('lint', function() {
  return gulp.src(['!js/vendor/**/*.js','js/**/*.js'])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch-test', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});

gulp.task('test-once', function (done) {
  Server.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    reporters: ['mocha']
  }, function(error) {
      done(error);
  });
});

gulp.task('copy', function(){
  gulp.src('node_modules/font-awesome/fonts/*.{woff,woff2,eot,svg,ttf}')
  .pipe(gulp.dest('dist/fonts'));
  gulp.src('img/*')
  .pipe(gulp.dest('dist/img'));
  gulp.src('favicon.ico')
  .pipe(gulp.dest('dist'));
  gulp.src('firebase.json')
  .pipe(gulp.dest('dist'));
  gulp.src('README.md')
  .pipe(gulp.dest('dist'));
  gulp.src('CNAME')
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy', 'livereload', 'watch']);
gulp.task('test', ['lint', 'watch-test']);
gulp.task('testci', ['lint', 'test-once']);
gulp.task('build', ['clean-dist', 'copy']);
