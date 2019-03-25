# notes

## `__dirname` in webpack config file

```js
node: {
  __dirname: false // https://github.com/webpack/webpack/issues/2010#issuecomment-181256611
}
```

- __dirname: false disables webpack processing of __dirname. If you run the bundle in node.js it falls back to the __dirname of node.js (which makes sense for target: node).
- __dirname: true let webpack replace __dirname with the path relative to you context. Makes sense for target: web if you need the path.


I tried without `__dirname: false` for a electron project. The `__dirname` is always `/`.
In such case, `__dirname: false` is needed.
