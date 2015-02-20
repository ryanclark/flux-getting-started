var gulp        = require('gulp');
var refresh     = require('gulp-livereload');

// Watch
module.exports = function () {
  gulp.watch('public/src/**/*.html', ['copy:html']);
  gulp.watch('public/src/scss/**/*.scss', ['styles']);
  gulp.watch('public/src/js/**/*', ['scripts']);
};
