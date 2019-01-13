module.exports = function(gulp, plugins) {
    return function () {       
            plugins.nodemon({
                script: 'server/server.js',
                watch: ["server.js", "app.js", 'app/*', 'app/*/**/**'],
                ext: 'js'
            }).on('restart', () => {
            gulp.src('server.js')
              .pipe(plugins.notify('Running the start tasks and stuff'));
          });
    }
}