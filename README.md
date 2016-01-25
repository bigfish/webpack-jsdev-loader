### JSDev Webpack Loader

### About

This loader applies JSDev to the source JavaScript, and uncomments JSDev comments.

See [https://github.com/douglascrockford/JSDev](https://github.com/douglascrockford/JSDev) for more info on JSDev.


### Installation

    npm install jsdev-loader


### Configuration

In webpack config: 

    module: {
      loaders: [{
        test: /\.jsx?/,
        exclude: /node_modules/,
        loaders: [
          'jsdev-loader?{tags:["dev", "log:console.log"]}',
          'babel-loader?{ cacheDirectory: true, presets: ["es2015"] }']
      }],
    },


Note: the jsdev-loader must come before the babel-loader, as it cannot handle raw es6 code.

The query parameter must be in object literal format, not URL style, or separate query object.

It currently only supports configuring the tags, other properties of the config will be ignored.
