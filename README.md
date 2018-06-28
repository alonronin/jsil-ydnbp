You Don't Need A Boilerpalate
===

> Webpack configuration for you own custom boilerplate

`git clone` && `npm i` && `npm start`

### The talk
https://youtu.be/dfPCFTEbtKI

### Slides
https://bit.ly/2xpZOEg

### Adding babel to transpile to es5

If we want our code to transpile to es5 for cross-browser suport we need to add `babel-core` and `babel-loader`.  
Also it is best to add the `babel-preset-env` to have support for stage 4 proposals.

```bash
$ npm i babel-core babel-loader babel-preset-env --save-dev
```

In [.babelrc](./.babelrc):

```json
{
  "presets": ["env"]
}
```

In [webpack.config](./webpack.config.js):

```js
const { resolve } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
        include: resolve(__dirname, 'src')
      }
    ]
  }
}
```

### Transpile `async await`

We need to add the `babel-polyfill` to our main entry point:

```bash
$ npm i babel-polyfill --save-dev
```

In [webpack.config](./webpack.config.js):

```js
module.exports = {
  entry: {
    main: ['babel-polyfill', './src']
  }
}
```

### Tree Shaking

In [.babelrc](./.babelrc), turn off preset's module system:

```json
{
  "presets": [
    ["env", {"modules": false"}]
  ]
}
```

### Dynamic imports

For dynamic imports to work together with babel, babel needs to understand the `import()` sytanx.  
We need a plugin for it:

```bash
$ npm i babel-plugin-syntax-dynamic-import --save-dev
```

In [.babelrc](./.babelrc):

```json
{
  "presets": [
    ["env", {"modules": false}]
  ],

  "plugins": ["syntax-dynamic-import"]
}
```

### Vendors chunk

Create vendors chunk for third-party libreries.

In [webpack.config](./webpack.config.js):

```js
module.exports = {
  entry: {
    main: './src',
    vendors: ['jquery', 'react', 'angular', 'lodash']
  },
  
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'initial',
            name: 'vendors',
            test: 'vendors',
            enforce: true
        },
      }
    }
  }

}
```
