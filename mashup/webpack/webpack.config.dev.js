const sharedConfig = require('./webpack.config.shared');

const devServer = {
  contentBase: sharedConfig.paths.output,
  port: 7700,
};

const config = {
  devServer,
  entry: sharedConfig.entry,
  module: sharedConfig.module,
  output: sharedConfig.output,
  plugins: sharedConfig.plugins,
};

module.exports = config;
