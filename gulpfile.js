let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass")
gulp.task("server",["sass"],function(){
    connect.server({
        port:8080,
        livereload:true
    });
  gulp.watch(["index.html",'css/style.css'],["html"])
  gulp.watch("scss/*.scss",["sass"])
})
gulp.task("html",function(){
    gulp.src("index.html").pipe(connect.reload());
})
gulp.task("sass",function(){
    gulp.src("scss/*.scss").pipe(sass().on('error', sass.logError)).pipe(gulp.dest("css"))
})
