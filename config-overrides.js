/* config-overrides.js */
module.exports = function override(config, env) {
  resolve.fallback: { crypto: false } 
  return config;
}