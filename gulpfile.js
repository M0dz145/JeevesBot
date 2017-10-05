var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    size       = require('gulp-size'),
    livereload = require('gulp-livereload'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    browserify = require('browserify'),
    watchify   = require('watchify'),
    babel      = require('babelify'),
    moment     = require('moment');

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
            .on('end', function() {
                console.timeEnd('timer');
                console.log('Build finished');
            })
            .pipe(gulp.dest('./build'))
            .pipe(livereload());
    }

    if(watch) {
        bundler.on('update', rebundle);
    }

    rebundle();
}

gulp.task('build', function() {
    livereload.listen()
    return compile(true);
});

gulp.task('watch', function() {
    gulp.start('build')
    // gulp.watch('./js/**/*.js', ['build'])
});

gulp.task('default', ['watch']);