var webpack = require('webpack'),
    path = require('path');

module.exports = {
    context: __dirname + '/app',    // tells webpack where our app lives
    entry: {
        app: './app.js',
        vendor: ['angular']  
    },
    output: {   // where our bundle will go after webpack is done
        path: __dirname + '/public/scripts',
        filename: 'todo.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};