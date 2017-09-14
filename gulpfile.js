var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('cssmin', function() {
    gulp.src(['./src/**/*.css'])
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/'));
});
gulp.task('htmlmin', function() {
    gulp.src(['./src/**/*.html'])
        .pipe(htmlmin({
            removeComments: true, //清除HTML注释
            collapseWhitespace: true //压缩HTML
        }))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('uglify', function() {
    gulp.src(['./src/**/*.js', '!./src/assets/js/prefixfree.min.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/assets/js'));
});