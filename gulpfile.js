var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

// compass
gulp.task('compass', function(){
    gulp.src('scss/**/*.scss').pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: 'css/',
        sass: 'scss/'
    }));
});


// css-min
gulp.task('cssmin', function () {
  gulp.src('css/*.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('cssmin'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});


//default
gulp.task('default', function(){
    gulp.run('watch');
});

/**
 * watch
 * watchでcompassを自動で書きだす
 */
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', function(event) {
        gulp.run('compass');
    });
    gulp.watch('css/**/*.css', function(event) {
      gulp.run('cssmin');
    });
    gulp.run('browser-sync');

    gulp.watch('./*.html', function(event) {
      gulp.run('bs-reload');
    });
    gulp.watch('cssmin/*.css', function(event) {
      gulp.run('bs-reload');
    });

});
