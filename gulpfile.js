var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy:false});

gulp.task('scripts', require('./tasks/scripts')(gulp, plugins));
gulp.task('sass', require('./tasks/sass')(gulp, plugins));
gulp.task('server', require('./tasks/server')(gulp, plugins));

gulp.task('serve', ['scripts','sass','server'], function(){
    gulp.watch('app/src/js/**/*.js',['scripts']);
    gulp.watch('app/src/sass/**/*.scss',['sass']);
})