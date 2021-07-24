'use strict';

const gulp = require('gulp');

// CONFIG

const { PATHS, BUILD_PATH } = require('./gulp.config')

// SERVICES

const plumber = require("gulp-plumber");
const del = require("del");
const rename = require("gulp-rename");
const sourcemap = require("gulp-sourcemaps");

// PUG

const pug = require("gulp-pug");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");

// Css

const css = require("gulp-sass");
const csso = require("gulp-csso");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

// IMAGES AND SVG

const svgstore = require("gulp-svgstore");
const webp = require("gulp-webp");

// JS

const webpack = require("webpack-stream");

// SERVER

const browserSync = require('browser-sync').create();

// TASKS

const clean = () => {
  return del(BUILD_PATH);
}

const fonts = () => {
  return gulp.src([PATHS.fonts.src])
  .pipe(gulp.dest(PATHS.fonts.output));
}

const html = () => {
  return gulp.src([PATHS.html.src])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest(BUILD_PATH));
};

const styles = () => {
  return gulp.src([PATHS.styles.inputFileName])
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(css())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename(PATHS.styles.outputFileName))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest(PATHS.styles.dest))
    .pipe(browserSync.stream());
};

const imagemin = require('gulp-imagemin');
 
const images = () => (
    gulp.src(PATHS.images.src)
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(gulp.dest(PATHS.images.dest))
);

const toWebp = () => {
  return gulp.src(PATHS.images.webpSrc)
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest(PATHS.images.webpDest));
}

const js = () => {
  return gulp.src([PATHS.scripts.inputFileName])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(BUILD_PATH));
};

const server = () => {
  browserSync.init({
    server: BUILD_PATH,
    notify: false,
    open: true,
    cors: true,
    ui: false,
    port: 3000
  });

  gulp.watch(PATHS.styles.src, gulp.series(styles, refresh));
  gulp.watch(PATHS.html.srcWatch, gulp.series(html, refresh));
  gulp.watch(PATHS.scripts.srcWatch, gulp.series(js, refresh));
  gulp.watch(PATHS.vue.srcWatch, gulp.series(js, refresh));
};

const refresh = (done) => {
  browserSync.reload();
  done();
}

const sprite = () => {
  return gulp.src([PATHS.images.spriteSrc])
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename(PATHS.images.spriteFileName))
    .pipe(gulp.dest(PATHS.images.spriteDest));
}

const build = gulp.series(clean, fonts, sprite, html, styles, js, images);
const start = gulp.series(build, server);
const convertToWebp = gulp.series(toWebp, start);

exports.build = build;
exports.start = start;
exports.convertToWebp = convertToWebp;

