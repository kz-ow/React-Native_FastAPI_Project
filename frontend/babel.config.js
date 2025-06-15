module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel']  // Expo Router用Babelプラグインを明示
  };
};
