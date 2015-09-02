System.config({
    transpiler: "babel",
    babelOptions: {
        //optional: [
        //    "runtime"
        //]
    },
    map: {
        babel: './libs/browser.js',
        //"babel-runtime": '../node_modules/babel-core/node_modules',
        jquery: './libs/jquery-2.1.4.min.js',
        handlebars: './libs/handlebars-v3.0.3.js'
    }
});
