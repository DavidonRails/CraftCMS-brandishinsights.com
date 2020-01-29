var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();


var config = {};

//basics
config.siteName = 'Brandish Insights';
config.proxyDomain = 'https://newbr.test';
config.key = '~/.localhost/key.pem';
config.cert = '~/.localhost/cert.pem';


var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// Compile sass
gulp.task('sass', function () {
  gulp.src('web/components/styles/**/*')
    .pipe(sourcemaps.init().on('error', sass.logError))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./web/css'))
    .pipe(browserSync.stream());
});

// Uglify Javascripts
gulp.task('compress', function() {
  return gulp.src('web/components/scripts/**/*.js')
    // .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// Watching files
gulp.task('watch', function() {
	browserSync.init({
        proxy: config.proxyDomain
  });

  gulp.watch("web/components/scripts/**/*.js", ['compress']);
  gulp.watch("web/components/styles/**/*", ['sass']);
  gulp.watch("*.html", "*.twig").on('change', browserSync.reload);
});

// Uglify Plugins
gulp.task('uglifyPlugins', function() {
  return gulp.src(['web/components/libs/bootstrap-sass/assets/javascripts/bootstrap.js',
    'web/components/libs/jquery/dist/jquery.js'])
    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// // Minify Plugins CSS files
// gulp.task('minifyPlugins', function() {
//   return gulp.src(['components/libs/bootstrap/dist/css/bootstrap.css'])
//     .pipe(rename({
//       suffix: ".min",
//       extname: ".css"
//     }))
//     .pipe(minifyCss({compatibility: 'ie9'}))
//     .pipe(gulp.dest('css'));
// });

gulp.task('build', ['uglifyPlugins', 'minifyPlugins']);
gulp.task('default', ['watch']);