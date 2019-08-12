const webpack = require('webpack');
const path = require('path');

const PATH = {
  HELPERS: path.join(__dirname, '/helpers'),
}

const ENTRIES = {
  'math': `${PATH.HELPERS}/Math.js`,
  'renderers': `${PATH.HELPERS}/Renderer.js`,
  'data': `${PATH.HELPERS}/data.js`,
}

module.exports = {
  mode: 'production',
  context: PATH.HELPERS,
  entry: ENTRIES,
  output: {
    filename: '[name].lib.js',
    path: `${PATH.HELPERS}/`,
  },
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'manifest',
    },
  }
};
