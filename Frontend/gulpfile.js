const gulp = require("gulp");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");

// Task to run Webpack
function bundleJS() {
  return gulp
    .src("src/index.js") // Your entry point
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("dist"));
}

// Define the default task to run Webpack
gulp.task("default", bundleJS);
