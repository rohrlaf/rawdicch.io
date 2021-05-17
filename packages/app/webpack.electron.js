const path = require('path');

module.exports = {
  // Build Mode
  mode: 'development',
  // Electron Entrypoint
  entry: './src/main.ts',
  target: 'electron-main',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }]
  }
}
