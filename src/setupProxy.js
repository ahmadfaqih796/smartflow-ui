const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
