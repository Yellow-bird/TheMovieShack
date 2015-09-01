System.config({
    transpiler: "babel",
    babelOptions: {
        optional: [
            "runtime"
        ]
    },
    map: {
        babel: './libs/browser.js',
        jquery: './libs/jquery-2.1.2.min.js',
        handlebars: './libs/handlebars-v3.0.3.js'
    }
});
