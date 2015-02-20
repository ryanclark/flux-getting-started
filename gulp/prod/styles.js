var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var plumber     = require('gulp-plumber');
var prefix      = require('gulp-autoprefixer');
var notify      = require('gulp-notify');
var rename      = require('gulp-rename');
var csso        = require('gulp-csso');

module.exports = function(){

  var styles = gulp.src('public/src/scss/ecar.scss')
    .pipe(plumber())
    .pipe(sass({sourcemap: false}))
    .pipe(prefix('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    .on('error', notify.onError())
    .pipe(gulp.dest('src/main/webapp/css'));

  return styles;

};
