var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var webpack = require("webpack");
var shell = require('gulp-shell');

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

gulp.task('webpack', shell.task(['webpack --display-error-details']));