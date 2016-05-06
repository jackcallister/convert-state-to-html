module.exports = {
  entry: './src/index.js',
  output: {
    library: 'convert-state-to-html',
    libraryTarget: 'umd',
    path: './lib',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom/server': {
      commonjs: 'react-dom/server',
      commonjs2: 'react-dom/server',
      amd: 'react-dom/server',
      root: 'react-dom/server'
    },
    'draft-js': {
      commonjs: 'draft-js',
      commonjs2: 'draft-js',
      amd: 'draft-js',
      root: 'draft-js'
    },
    'draft-js-utils': {
      commonjs: 'draft-js-utils',
      commonjs2: 'draft-js-utils',
      amd: 'draft-js-utils',
      root: 'draft-js-utils'
    }
  }
}
