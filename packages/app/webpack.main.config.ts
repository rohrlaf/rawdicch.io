import path from 'path';
import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src'),
      '@prisma/client$': require.resolve('@prisma/client'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  externals: {
    _http_common: 'commonjs2 _http_common',
    encoding: 'commonjs2 encoding',
  },
};
