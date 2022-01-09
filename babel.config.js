module.exports = {
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      { allowUndefined: false, moduleName: 'react-native-dotenv', safe: true }
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          atoms: './src/components/atoms',
          contexts: './src/contexts',
          hooks: './src/hooks',
          integration: './src/integration',
          molecules: './src/components/molecules',
          navigation: './src/navigation',
          organisms: './src/components/organisms',
          screens: './src/screens',
          src: './src',
          templates: './src/components/templates',
          test: './test',
          utils: './src/utils'
        }
      }
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic'
      }
    ]
  ],
  presets: [['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }]]
}
