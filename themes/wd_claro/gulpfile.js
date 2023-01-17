//gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var nodeSassGlobbing = require('node-sass-globbing');
var gutil = require('gulp-util')

//style paths
var sassFiles = 'scss/**/*.scss',
    cssDest = 'css/';

//script paths
var jsFiles = 'js/src/*.js',
    jsDest = 'js';


gulp.task('styles', function() {
    gulp.src(sassFiles)
        .pipe(sourcemaps.init())
        .pipe(sass({ 
            outputStyle: 'compressed', 
            importer: nodeSassGlobbing
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(cssDest));
});

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(jsDest));
});

gulp.task('watch', function() {
    gulp.watch(sassFiles, ['styles']);
    gulp.watch(jsFiles, ['scripts']);
});
