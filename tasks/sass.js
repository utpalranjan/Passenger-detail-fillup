module.exports = function(gulp, plugins) {
    return function() {
        gulp.src('app/src/sass/**/*.scss')
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer())
            .pipe(plugins.minifyCss())
            .pipe(gulp.dest('app/dist/css'));
    }
}
