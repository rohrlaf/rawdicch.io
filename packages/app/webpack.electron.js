const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: './src/core/electronMain.ts',
    target: 'electron-main',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    node: { global: true },
    resolve: {
      alias: {
        ['@']: path.resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: [/src/],
          use: [{ loader: 'ts-loader' }],
        },
      ],
    },
  },
  {
    mode: 'development',
    entry: './src/core/electronPreload.ts',
    target: 'electron-preload',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'preload.js',
    },
    resolve: {
      alias: {
        ['@']: path.resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: [/src/],
          use: [{ loader: 'ts-loader' }],
        },
      ],
    },
  },
];
