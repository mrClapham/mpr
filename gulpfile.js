var gulp = require('gulp');
// Plumer handles errors - in the .pipe, naturally.
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var less = require('gulp-less');
var path = require('path');


gulp.task('less', function () {
    return gulp.src('./less/*.less')
        .pipe(plumber())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['less']);


gulp.task('watch', function(){
    gulp.watch('less/**/*.*', ['default']);
});
