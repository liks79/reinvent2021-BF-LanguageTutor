module.exports = {
  webpack: {
    module: {
      rules: [
        {
          test: /\host.three.js$/,
          use: 'bundle-loader'
        }
      ]
    }
  }
}