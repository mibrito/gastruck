var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');
var exorcist = require('exorcist');
var browserify = require('browserify');

// less
gulp.task('less', function() {
	gulp.src('src/app.less')
		.pipe(watch('src/app.less'))
		.pipe(less())
		.pipe(gulp.dest('build/css'))
});

// Input file.
watchify.args.debug = true;
watchify.args.extensions = ['.jsx', '.js'];
var bundler = watchify(browserify('./src/app', watchify.args));

// Babel transform
bundler.transform(babelify.configure({
	sourceMapRelative: 'build/'
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {
	var start = new Date().getTime();
	gutil.log('Compiling JS...');

	var rtn = bundler.bundle()
		.on('error', function(err) {
			gutil.log(err.message);
			this.emit('end');
		})
		.pipe(exorcist('build/build.js.map'))
		.pipe(source('build.js'))
		.pipe(gulp.dest('./build/'))

	var end = new Date().getTime();
	var time = end - start;

	gutil.log(gutil.colors.cyan('browserify'), 'rebundle took ', gutil.colors.cyan(time + ' ms'));
	return rtn;
}

/**
 * Gulp task alias
 */
gulp.task('bundle', function() {
	return bundle();
});

gulp.task('develop', ['less','bundle'], function() {
	gulp.watch('./src/**/*.less', ['less']);
});

/**
 * First bundle, then serve from the ./app directory
 */
gulp.task('default', ['less','bundle'], function() {});
