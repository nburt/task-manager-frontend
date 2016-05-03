var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task('styles', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('build-dev', ['webpack', 'styles', 'watch']);

gulp.task('build-prod', ['webpack', 'styles']);

gulp.task("webpack", function (done) {
    webpack(webpackConfig).run(onBuild(done));
});

function onBuild(done) {
    return function (err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function (key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
            if (done) {
                done();
            }
        }
    }
}