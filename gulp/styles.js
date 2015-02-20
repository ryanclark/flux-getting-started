var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var plumber     = require('gulp-plumber');
var prefix      = require('gulp-autoprefixer');
var notify      = require('gulp-notify');
var refresh     = require('gulp-livereload');
var rename      = require('gulp-rename');

module.exports = function(){

  var styles = gulp.src('public/src/scss/app.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(prefix('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    .on('error', notify.onError())
    .pipe(gulp.dest('public/dist/css'))
    .on('end', function (){
        if( global.lrserver ) {
          gulp.src('public/dist/css/app.css')
              .pipe(refresh(global.lrserver));
        }
      });

  return styles;

};
