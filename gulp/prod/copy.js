var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

module.exports = function () {
	gulp.src('public/src/fonts/**')
		.pipe(gulp.dest('src/main/webapp/fonts'));

	gulp.src('public/src/img/**')
		.pipe(gulp.dest('src/main/webapp/img'));

	gulp.src([
		'public/libs/react/react-with-addons.js',
		'public/libs/q/q.js',
		'public/libs/chartjs/Chart.min.js',
		'public/libs/signature_pad/signature_pad.js',
		'public/libs/appsbroker-adapt/dist/adapt.js'
		])
		.pipe(concat('lib.min.js'))
		.pipe(gulp.dest('src/main/webapp/js'));
};