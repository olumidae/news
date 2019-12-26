module.exports = {
  extends: "airbnb-base",
  rules: {
      "max-len": ["error", {"code": 160}]
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
};