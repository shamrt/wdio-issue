var gulp = require('gulp');
var webdriver = require('gulp-webdriver');


gulp.task('e2e', function e2e() {
  return gulp.src('test/wdio.conf.js').pipe(webdriver());
});
