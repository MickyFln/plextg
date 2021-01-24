const gulp = require('gulp')
const tsCompiler = require('gulp-typescript')
const srcFolder = './src/'
const destFolder = './dist/'
const tsProject = tsCompiler.createProject('tsconfig.json')

function ts() {
  return tsProject.src()
        .pipe(tsProject()).js
        .pipe(gulp.dest(destFolder))
}

function tsWatch() {
  return gulp.watch(`${srcFolder}**/*.ts`, ts)
}

gulp.task('default', gulp.parallel(tsWatch));