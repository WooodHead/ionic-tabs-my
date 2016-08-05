var gulp=require('gulp');

require('./gulp/tasks/copy');
require('./gulp/tasks/sass');
require('./gulp/tasks/jade');
require('./gulp/tasks/clean');



gulp.task('build',['sass'],function(){
  console.log('--------build');
});

gulp.task('default',[],function(){
  console.log('-------default');
  gulp.start('build');
});
