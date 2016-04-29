var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default',function() {
    gulp.start('styles');
    gulp.watch('sass/**/*.scss',['styles']);
});
