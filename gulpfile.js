var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    size         = require('gulp-size'),
    livereload   = require('gulp-livereload'),
    source       = require('vinyl-source-stream'),
    buffer       = require('vinyl-buffer'),
    browserify   = require('browserify'),
    watchify     = require('watchify'),
    babel        = require('babelify'),
    moment       = require('moment');

function compile(watch) {
    var bundler = browserify('./js/app.js', {
        debug: true,
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
        fullPaths: watch // required to be true only for watchify
    }).transform(babel.configure({
        presets: ["es2015"],
        compact: false
    }));

    if(watch) {
        bundler = watchify(bundler)
    }

    function rebundle() {
        console.log('-> bundling...');
        console.time('timer');

        bundler.bundle()
            .on('error', function(err) {
                console.error(err);
                console.timeEnd('timer');
                this.emit('end');
            })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(size())
            .pipe(gulp.dest('./build'))
            .pipe(livereload());
    }

    if(watch) {
        bundler.on('update', rebundle);
    }

    rebundle();
}

gulp.task('build', function() {
    return compile(true);
});

gulp.task('scss', function() {
    return gulp.src('./css/app.scss')
        .pipe(sass({
            errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(size())
        .pipe(gulp.dest('./build'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen()
    gulp.watch('./css/**/*.scss', ['scss'])
});

gulp.task('default', ['build', 'scss', 'watch']);