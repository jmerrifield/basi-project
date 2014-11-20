var gulp = require('gulp')

gulp.task('jade', function () {
  gulp.src(['./pages/**/*.jade', '!./pages/layout.jade'])
    .pipe(require('gulp-jade')({}))
    .pipe(gulp.dest('./out'))
})

gulp.task('static', function () {
  gulp.src('./pages/*.png')
  .pipe(gulp.dest('./out'))
})

gulp.task('run', ['jade', 'static'], function () {
  gulp.watch('./pages/**/*.jade', ['jade'])
})
