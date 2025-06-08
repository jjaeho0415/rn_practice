const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// svg 설정 수정
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  ext => ext !== 'svg',
);
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'svg',
];

// 수정된 transformer와 함께 config 병합
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    // 아래 옵션은 필요 시 추가 (보통 기본값으로 충분하지만 명시해도 됨)
    // getTransformOptions: async () => ({
    //   transform: {
    //     experimentalImportSupport: false,
    //     inlineRequires: true,
    //   },
    // }),
  },
  resolver: defaultConfig.resolver,
};

module.exports = mergeConfig(defaultConfig, config);
