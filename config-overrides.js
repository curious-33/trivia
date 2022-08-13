module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.resolve.fallback = {
    url: false,
  };

  return config;
};
