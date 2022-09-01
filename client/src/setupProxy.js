const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/v1/members/signup",
    createProxyMiddleware({
      target:
        "http://ec2-15-164-225-107.ap-northeast-2.compute.amazonaws.com:8080",
      changeOrigin: true,
    })
  );
};
