var gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
gulp.task('lint', function() {
  return gulp.src('**/*.js')
  .pipe(eslint())
  .pipe(eslint.format());
});
gulp.task('mocha', function(){
  return gulp.src('test/*.js')
  .pipe(mocha());
});
gulp.task('default',['lint','mocha']);
