module.exports = {
    entry: "./src/app.js",
    output: {
        path: "build",
        publicPath: "/assets/",
        filename: "js/bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015'] // REQUIRED for ECMA loading from entry file
          }
        }
      ]
    }
};
