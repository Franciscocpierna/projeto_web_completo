const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
           .pipe(babel({
            comments: false,
            //presets: ["env"]
            presets: ['@babel/preset-env']
           })) 
           .pipe(uglify())
           .on('error', err => console.log(err))
           .pipe(concat('codigo.min.js'))
           .pipe(gulp.dest('build'))

    return cb()
}

function fim(cb) {
    console.log('fim')
    return cb()
}
exports.default = series(padrao)
