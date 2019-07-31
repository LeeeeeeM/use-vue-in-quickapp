module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-runtime'],
    ignore: [/[/\\]core-js/, /@babel[/\\]runtime/],
    babelrcRoots: ['.', 'node_modules']
  }
}
