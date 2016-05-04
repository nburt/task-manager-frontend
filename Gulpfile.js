var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var webpack = require("webpack");
var shell = require('gulp-shell');

gulp.task('styles', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass(
            {includePaths: ['styles'].concat(neat), outputStyle: 'compressed'}
        ).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('build-dev', ['webpack-dev', 'styles', 'watch']);

gulp.task('build-prod', ['webpack-prod', 'styles']);

gulp.task('webpack-dev', shell.task(['webpack']));

gulp.task('webpack-prod', shell.task(['webpack --optimize-minimize']));
