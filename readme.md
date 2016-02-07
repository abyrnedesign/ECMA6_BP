# Base ECMA6 webpack
Boilerplate for ECMA6 projects using
* Webpack
* Babel 6
* tape test runner

version 1.0.0 basic setup missing issues

# Use
get, install and run 
```javascript
git clone git@github.com:abyrnedesign/ECMA6_BP.git //fetch the repo
npm install // get the requred modules
webpack //compile
```


# Setup
To create this repo from scratch you would need to run
## Testing
run in the project file
```javascript
npm install --save-dev tape
```

## Webpack & ECMA6
run in the project file
```javascript
npm install --save-dev webpack webpack-dev-server
npm install --save-dev babel-cli babel-core babel-loader babel-preset-es2015
```

The webpack config uses the babel loader and requires as a minimum
```javascript
module: {
loaders: [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel', // 'babel-loader' is also a legal name to reference
    query: {
      presets: ['es2015']
    }
  }
]
}
```
[babel-loader doco](https://www.npmjs.com/package/babel-loader)



