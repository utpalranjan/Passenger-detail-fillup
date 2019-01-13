module.exports = function (gulp, plugins) {
    return function () {
            gulp.src('app/src/js/**/*.js')
                .pipe(plugins.concat('bundle.js'))
                .pipe(plugins.uglify())
                .pipe(gulp.dest('app/dist/js'));
    }
}