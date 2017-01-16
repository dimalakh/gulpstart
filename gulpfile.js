const gulp        = require('gulp');
const cssmin      = require('gulp-cssmin');
const concatCss   = require('gulp-concat-css');
const rename      = require('gulp-rename');
const image       = require('gulp-image');


gulp.task('copying', function(){
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('copyingjs', function(){
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
});

gulp.task('fonts', function(){
  return gulp.src('src/fonts/**/')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('mincss', function(){
  return gulp.src(['src/css/style.css', 'src/css/fonts.css', 'src/css/jquery.bxslider.css', 'src/css/remodal.css', 'src/css/remodal-default-theme.css'])
    .pipe(concatCss('css/bundle.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist'));
});

gulp.task('minimg', function () {
  gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build', [ 'copying', 'fonts', 'mincss', 'minimg', 'copyingjs']);

gulp.task('watch', function(){
  gulp.watch('src/**/*.html', ['copying']);
  gulp.watch('src/css/**/*.css', ['mincss']);
  gulp.watch('src/img/*', ['minimg']);
  gulp.watch('src/js/*', ['copyingjs']);
});
