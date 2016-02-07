# Base ECMA6 webpack
Boilerplate for ECMA6 projects using
* Webpack
* Babel 6
* tape test runner

version 1.0.0 basic setup missing issues

# Setup
## testing
```javascript
npm install --save-dev tape
```

## Webpack & ECMA6
```javascript
npm install --save-dev webpack webpack-dev-server
npm install --save-dev babel-cli babel-core babel-loader babel-preset-es2015
```

```javascript
module: {
loaders: [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel', // 'babel-loader' is also a legal name to reference
    query: {
      presets: ['react', 'es2015']
    }
  }
]
}
```
[babel-loader doco](https://www.npmjs.com/package/babel-loader)

## React branch
```javascript
npm install --save react react-dom
npm install --save-dev babel-preset-react

```
