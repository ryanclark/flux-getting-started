var gulp 	   = require('gulp');
var refresh    = require('gulp-livereload');
var preprocess = require('gulp-preprocess');

module.exports = function () {
	return gulp.src('public/src/**/*.html')
		.pipe(preprocess({context: { dev: true }}))
		.pipe(gulp.dest('public/dist'))
		.pipe(refresh(global.lrserver));
};