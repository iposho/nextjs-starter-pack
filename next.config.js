const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withSize = require('next-size');
const withProgressBar = require('next-progressbar');

const path = require('path');

const nextConfig = {
  webpack: (config => {
    // Here is the magic
    // We push our config into the resolve.modules array
    config.resolve.modules.push(path.resolve('./'));

    return config
  })
};

module.exports = withPlugins([
  [withSize],
  [withProgressBar],
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    }
  }],
  [withCSS],
], nextConfig);
