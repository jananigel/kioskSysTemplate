var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    // uglify = require('gulp-uglify'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    haml = require('gulp-ruby-haml'),
    connect = require('gulp-connect');

gulp.task('webserver', function(){
	connect.server({
		port: 3001,
		root: 'dist',
		livereload: true
	});
});

//Html
/*gulp.task('haml', function() {
  return gulp.src('src/*.{html,haml}')
  	.pipe(haml().on('error', function(e) { console.log(e.message); }))
    .pipe(gulp.dest('./dist'));
});*/
gulp.task('haml', function() {
  gulp.src('src/*.haml')
       .pipe(haml().on('error', function(e) { console.log(e.message); }))
       .pipe(gulp.dest('./dist'))
       .pipe(livereload());
});

 // Styles
gulp.task('styles', function() {
  return sass('src/sass/styles.sass', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }))
    .pipe(livereload());
});

gulp.task('myTask', function(){
  console.log('Run the gulp task.');
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }))
    .pipe(connect.reload())
    .pipe(livereload());
});

// Images
gulp.task('images', function() {
  return gulp.src('src/img/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }))
    .pipe(connect.reload());
});

// Clean
gulp.task('clean', function() {
  return del(['dist/css', 'dist/js', 'dist/img']);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('css', 'js', 'img');
});

// Watch
gulp.task('watch', function() {

  // Watch all file
  //gulp.watch('src/**/*');

  // Watch .haml files
  gulp.watch('src/*.haml', ['haml']);

  // Watch .haml files
  gulp.watch('src/home/*.haml', ['haml']);

  // Watch .scss files
  gulp.watch('src/sass/*.sass', ['styles']);

  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/img/*', ['images']);

  // Create LiveReload server
  livereload.listen(35729, function(err){
  	if(err) return console.log(err);
  });

  // Watch any files in dist/, reload on change
  gulp.watch('dist/*').on('change', livereload.changed);

});

//start
gulp.task('start', ['watch', 'webserver']);