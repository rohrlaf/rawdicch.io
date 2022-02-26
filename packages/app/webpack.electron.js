const CopyWebpackPlugin = require('copy-webpack-plugin');
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
        '@prisma/client$': require.resolve('@prisma/client'),
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
    externals: {
      _http_common: 'commonjs2 _http_common',
      encoding: 'commonjs2 encoding',
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'node_modules', '.prisma', 'client'),
            to: path.resolve(__dirname, 'dist'),
          },
        ],
      }),
    ],
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
        '@prisma/client$': require.resolve('@prisma/client'),
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
    externals: {
      _http_common: 'commonjs2 _http_common',
      encoding: 'commonjs2 encoding',
    },
  },
];
