var gulp = require('gulp');

/**
 * Development
 */
var server = require('./gulp/server');
var scripts = require('./gulp/scripts');
var styles = require('./gulp/styles');
var watch = require('./gulp/watch');
var copyLibs = require('./gulp/copy-libs');
var copyHTML = require('./gulp/copy-html');

gulp.task('server', server);
gulp.task('scripts', scripts);
gulp.task('styles',  styles);
gulp.task('watch', watch);
gulp.task('copy:html', copyHTML);
gulp.task('copy:libs', copyLibs);

gulp.task('build', [
  'scripts',
  'styles'
  ]);

gulp.task('test', [
  'build',
  'mock',
  'karma'
  ]);

gulp.task('default', [
  'server',
  'build',
  'copy:libs',
  'copy:html',
  'watch'
  ]);
