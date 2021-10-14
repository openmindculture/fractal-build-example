const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const fractal = require('./fractal.config');

const logger = fractal.cli.console;

function customPlumber(errTitle) {
  return plumber({
    errorHandler: notify.onError({
      title: errTitle || 'Error running Gulp',
      message: 'Error: <%= error.message %>',
    }),
  });
}

function sassTasks() {
  return gulp.src('src/components/assets/scss/global.scss')
    .pipe(customPlumber('Error running Sass'))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
}

function watchTask() {
  gulp.watch([
    'components/**/*.scss',
    'assets/scss/**/*.scss',
  ], gulp.series(sassTasks));
}

gulp.task('watch', gulp.series(sassTasks, watchTask));

function fractalStart() {
  const server = fractal.web.server({
    sync: true,
  });
  server.on('error', (err) => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
}

gulp.task('default', gulp.series(fractalStart, sassTasks, 'watch'));
