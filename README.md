You Don't Need A Boilerpalate
===

> Webpack configuration for you own custom boilerplate

`git clone` && `npm i` && `npm start`

### Slides
https://bit.ly/2xpZOEg

### Tree Shaking

In .babelrc, turn off preset's module system:

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

In .babelrc:

```json
{
  "presets": [
    ["env", {"modules": false}]
  ],

  "plugins": ["syntax-dynamic-import"]
}
```

