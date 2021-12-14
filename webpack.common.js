const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = './src/';
const PUB_DIR = './public';

module.exports = {
  entry: {
    main: [path.resolve(SRC_DIR, 'scripts/main.js')],
    './css/global': './src/assets/scss/global.scss',
  },
  output: {
    path: path.resolve(PUB_DIR),
    /* filename: 'scripts/[name].js', */
    filename: 'scripts/[name]-[contenthash].js',
  },
  module: {
    rules: [
      /* loaders are applied from last to first */
      {
        enforce: 'pre',
        test: /\.js$/,
        include: path.resolve(SRC_DIR, 'scripts'),
        exclude: /node_modules/,
        use: [
          'eslint-loader',
          'import-glob',
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'import-glob-loader',
        ],
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        loader: 'url-loader',
        include: path.resolve(SRC_DIR, 'images'),
        options: {
          limit: 10000,
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        './dist',
        './public',
      ],
    }),
    new StyleLintPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(SRC_DIR, '_fractal'),
          to: path.resolve(PUB_DIR, '_fractal'),
        }, // Fractal style overrides
        {
          from: path.resolve(SRC_DIR, 'images'),
          to: path.resolve(PUB_DIR, 'images'),
        },
        {
          from: path.resolve(SRC_DIR, 'assets/scss/fontawesome-free/webfonts'),
          to: path.resolve(PUB_DIR, 'webfonts'),
        },
        { from: path.resolve(SRC_DIR, 'meta'), to: path.resolve(PUB_DIR, '') },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash].css',
      /* TODO use hash only in last step to prevent generating more files than needed? */
    }),
  ],
};
