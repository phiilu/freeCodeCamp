const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://fcc.phiilu.com/front-end-libraries/random-quote-machine/' : '',
}