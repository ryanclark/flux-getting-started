var gulp        = require('gulp');
var header      = require('gulp-header');
var browserify  = require('browserify');
var bannerTop   = '/* @flow */' + "\n";
var reactify    = require('reactify');
var refresh     = require('gulp-livereload');
var rename      = require('gulp-rename');
var transform   = require('vinyl-transform');
var multipipe   = require('multipipe');
var flow        = require('gulp-flowtype');
var es6ify      = require('es6ify');
var fs          = require('fs');
var gutil       = require('gulp-util');
var exec        = require('child_process').exec;
var fs          = require('fs');
var flowToJshint = require('flow-to-jshint');
var stylish = require('jshint-stylish');
var reporter = require(stylish).reporter;

function bundler(file) {
  console.log(file);

  var b = browserify(es6ify.runtime, {
    extensions: ['.jsx'],
    debug: true,
    insertGlobalVars: true
  });

  function reactifyTags(file) {
    // var message = '';

    // var cmd = 'flow';

    // var templ = gutil.template(cmd, {file:message});

    // exec(templ, {cwd: process.cwd()}, function(err, stdout) {
    //   console.log(stdout);
    // } );

    return reactify(file, {stripTypes: true});
  }

  b.add(file);
  b.require('./public/src/js/ecar.jsx', { expose: 'ecar' });
  b.transform(reactifyTags);
  b.transform(es6ify.configure(/.(jsx|js)$/));
  return b.bundle();
}

module.exports = function() {
  var scripts = [
    gulp.src('public/src/js/ecar.jsx'),
    transform(bundler),
    rename('app.min.js'),
    gulp.dest('src/main/webapp/js')
  ];

  if( global.lrserver ) {
    scripts.push(refresh(global.lrserver));
  }

  var scriptsFunction = multipipe.apply(this, scripts);

  function errorHandler(e) {
    console.log();
  }

  scriptsFunction.on('error', errorHandler);

  return scriptsFunction;
};
