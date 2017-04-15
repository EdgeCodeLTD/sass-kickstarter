const gulp = require('gulp');                   // Include gulp [don't forget gulpfile.js]
const sass = require('gulp-sass');              // Include gulp-sass plugin
const uglify = require('gulp-uglify');          // Include gulp-uglify plugin (minify JS)
const rename = require('gulp-rename');
const pump = require('pump');                   // Include pump to throw useful errors

gulp.task('scss', () => {                       // Create a task for gulp-sass plugin
    gulp.src('assets/scss/*.scss')              // Select the source to work with
        .pipe(sass())                           // Run 'sass()' function to compile Sass code
        .pipe(gulp.dest('assets/dist/css'))     // Export to 'dist/css' folder
});

gulp.task('scss-b', () => {
    gulp.src('assets/scss/**/*.scss')
        .pipe(sass());
    gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/dist/css'))
});

gulp.task('compress', function (cb) {           // Create a task for gulp-uglify plugin
    pump([                                      // Use pump to throw useful errors
            gulp.src('assets/js/*.js'),         // Select the source to work with
            uglify(),                           // Run 'uglify()' function to minify JS
            rename({suffix: '.min'}),           // Add suffix .min to *.js file
            gulp.dest('assets/dist/js')         // Export to 'dist/js' folder
        ],
        cb
    );
});

gulp.task('watch', () => {                      // Create a task to watch for changes
    gulp.watch('assets/scss/*.scss', ['scss']); // Monitor any changes made to the .scss files in specific dir
    gulp.watch('assets/scss/**/*.scss', ['scss-b']);
    gulp.watch('assets/js/*.js', ['compress']); // Monitor any changes made to the .js files in specific dir
});                                             // and then run 'scss' task

// Default statement to execute on gulp command
gulp.task('default', ['scss', 'scss-b', 'compress', 'watch']);