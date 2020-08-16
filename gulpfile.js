var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cp = require('child_process');

/**
 * Compile and minify sass
 */
function styles() {
  return gulp
    .src([ '_sass/*.scss' ])
    .pipe(
      sass({
        includePaths: [ 'scss' ],
        onError: browserSync.notify
      })
    )
    .pipe(prefix([ 'last 3 versions', '> 1%', 'ie 8' ], { cascade: true }))
    .pipe(rename('main.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(gulp.dest('assets/css'));
}

/**
 * Build Jekyll site
 */
function jekyll(done) {
  return cp
    .spawn(
      'bundle',
      [
        'exec',
        'jekyll',
        'serve',
        '--config=_config.yml,_config_dev.yml',
        '--incremental',
        '--livereload',
        '--open-url'
      ],
      {
        stdio: 'inherit'
      }
    )
    .on('close', done);
}

/**
 * Watch source files for changes & recompile
 * Watch html/md files, run Jekyll & reload BrowserSync
 */
function watch() {
  gulp.watch(
    [
      '_config.yml',
      'assets/js/app.js',
      'assets/js/vendors/*.js',
      '_includes/*.html',
      '_layouts/*.html',
      'posts/*.md',
      'posts/**/*.md'
    ],
    jekyll
  );
}

function watchStyles() {
  gulp.watch([ '_sass/*.scss' ], styles);
}

function watch() {
  gulp.parallel(watch, watchStyles);
}

var serve = gulp.series(styles, jekyll);
var watch = gulp.parallel(watch, watchStyles);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the Jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.parallel(serve, watch));
