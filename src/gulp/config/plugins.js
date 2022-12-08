import newer from "gulp-newer";
import browserSync from "browser-sync";
import ifPlugin from "gulp-if";


export const plugins = {
    newer: newer,
    browserSync: browserSync,
    if: ifPlugin
}