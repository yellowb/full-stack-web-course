var gulp = require('gulp');
var gutil = require('gulp-util');
var sequence = require('gulp-sequence');

/* clean is a async io gulp task */
gulp.task('clean', function(done) {
  gutil.log('deleting dest folders');
  setTimeout(function() {
    gutil.log('clean folder done');
    done();
  }, 2000);
});

/* build is a sync output task */
gulp.task('build', function() {
  gutil.log('running building tasks');
});

/* auto-build = clean -> build in sequence! */
gulp.task('auto-build', sequence(['clean'],['build']));