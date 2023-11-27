const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const include = require('gulp-include');
const browserSync = require('browser-sync').create();

gulp.task('scss', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*') // Указываем путь к шрифтам
        .pipe(gulp.dest('dist/fonts')); // Путь, куда будут скопированы шрифты
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*') // Указываем путь к изображениям
        .pipe(gulp.dest('dist/images')); // Путь, куда будут скопированы изображения
});

gulp.task('js', function() {
    return gulp.src('src/js/**/*') // Указываем путь к изображениям
        .pipe(gulp.dest('dist/js')); // Путь, куда будут скопированы изображения
});

gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(include())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({ server: './dist' });
    gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('src/html/**/*.html', gulp.series('html'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('images', 'fonts', 'js', 'scss', 'html', 'serve'));
