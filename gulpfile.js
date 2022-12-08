import gulp from "gulp";

import { path } from "./src/gulp/config/path.js";
import { plugins } from "./src/gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import { copy } from "./src/gulp/tasks/copy.js";
import { reset } from "./src/gulp/tasks/reset.js";
import { scss } from './src/gulp/tasks/scss.js';
import { images } from './src/gulp/tasks/images.js';

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.images, images)
}
const mainTasks = gulp.parallel(copy, scss, images);
const dev = gulp.series(reset, mainTasks, watcher);
const build = gulp.series(mainTasks);

export {dev}
export {build}

gulp.task('default', dev);