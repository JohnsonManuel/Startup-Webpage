var gulp = require('gulp'),
sass = require('gulp-sass'),
rename = require('gulp-rename'),
connect= require('gulp-connect');
var webserver = require('gulp-webserver');

// gulp.task('webserver', function() {
//   gulp.src('../')
//     .pipe(webserver({
//       host:'0.0.0.0',
//       fallback: 'index.html',
//       livereload: true,
//       directoryListing: true,
//       open: true
//     }));
// });


gulp.task('connect', function(done){
  connect.server({
    root: 'app',
    livereload: true
  });
  done();
});

gulp.task('sass', function(){
  return gulp.src('app/stylesheets/sass/main.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(rename('style.css'))
    .pipe(gulp.dest('app/stylesheets/css'))
    .pipe(connect.reload());
});

// watch task
gulp.task('watch', function(done){
  gulp.watch(['app/stylesheets/sass/**/*.scss' , 'app/*.html'], gulp.series('sass'));
  done();
});

gulp.task('default',gulp.parallel('connect','watch'));
