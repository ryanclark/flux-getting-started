var gulp       = require('gulp');
var preprocess = require('gulp-preprocess');
var htmlmin    = require('gulp-htmlmin');

module.exports = function () {
  return gulp.src('public/src/**/*.html')
    .pipe(preprocess({context: { dev: false }}))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments : true,
      removeRedundantAttributes : true,
      removeAttributeQuotes : true,
      removeEmptyAttributes : true
    }))
    .pipe(gulp.dest('src/main/webapp'));
};