const gulp = require('gulp')
const gutil = require('gulp-util')
const watch = require('gulp-watch')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const prefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const browserSync = require('browser-sync')

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './docs'
    }
  })
})

gulp.task('watch', () => {
  watch('docs/**/*', (event) => {
    browserSync.reload()
  })

  watch('src/sass/**/*.scss', (event) => {
    gulp.start(['sass'])
  })
})

gulp.task('sass', () => {
  gulp.src('src/sass/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass())
    .pipe(prefixer('last 2 version'))
    .pipe(gulp.dest('docs/css'))
})

gulp.task('cssmin', () => {
  gulp.src('docs/css/style.css')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('docs/css'))
})

gulp.task('default', ['browser-sync', 'watch'])
