const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const concat = require("gulp-concat");
const uglify=require("gulp-uglify");
const rename=require("gulp-rename");
const cleancss=require("gulp-clean-css");
const imagemin=require("gulp-imagemin");
const babel = require("gulp-babel");

gulp.task("copy-index",function(){
	gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
});
gulp.task("copy-html",function(){
	gulp.src("html/**").pipe(gulp.dest("dist/html"));
});
gulp.task("copy-img",function(){
	gulp.src("images/**")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/images"));
});
gulp.task("copy-js",function(){
	gulp.src("javascript/**")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(uglify())
	.pipe(gulp.dest("dist/javascript"));
});

//gulp.task("sass",function(){
//	gulp.src("scss/**")
//	.pipe(sass())
//	.pipe(cleancss())
//	.pipe(gulp.dest("dist/css"));
//});

gulp.task("server",function(){
	connect.server({
		root:'dist',
		livereload:true
		});
});
gulp.task("watch",function(){
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("images/**",["copy-img"]);
	gulp.watch("html/**",["copy-html"]);
	gulp.watch("javascript/**",["copy-js"]);
	gulp.watch("css/**",["css"]);
});

gulp.task("default",["watch","server"]);

gulp.task("scripts",function(){
	gulp.src("javascript/**")
	.pipe(concat("main.js"))
	.pipe(uglify())
	.pipe(rename("min.js"))
	.pipe(gulp.dest("dist/javascript"))
});

gulp.task("es",function(){
	gulp.src("es6.js")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(rename("es5.js"))
	.pipe(gulp.dest("dist"));
})


gulp.task("css",function(){
	gulp.src("css/**")
	.pipe(cleancss())
	.pipe(gulp.dest("dist/css"))
})




















































