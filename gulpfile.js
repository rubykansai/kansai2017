var gulp     = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    gutil    = require('gulp-util'),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync"),
    plumber = require("gulp-plumber"),
    notify  = require('gulp-notify');
    gulpWatch = require('gulp-watch');

// browserSyncのリロード
var reload  = browserSync.reload;

// browserSync ルートはdest
gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: "./src" // ルートとなるディレクトリを指定
        }
    });
});


// sass
gulp.task("sass", function() {
    gulp.src("sass/**/*.scss")
        // エラーの場合のデスクトップポップアップ表示
        .pipe(plumber({
          errorHandler: notify.onError("Error: <%= error.message %>") //<-
        }))
        .pipe(sass())
        .pipe(prefixer('last 2 version'))
        .pipe(gulp.dest('./src/css'))
});

gulp.task("cssmin", function() {
    gulp.src("./src/**/*.css")
        // エラーの場合のデスクトップポップアップ表示
        .pipe(plumber({
          errorHandler: notify.onError("Error: <%= error.message %>") //<-
        }))
        .pipe(sass())
        .pipe(prefixer('last 2 version'))
        .pipe(gulp.dest('./src/css'))
});


gulp.task("watch",["browserSync"] ,function(){
    gulp.watch('sass/**/*.scss', ['sass']),
    gulp.watch('src/**/*', reload);
});

gulp.task("default",["sass"]);


