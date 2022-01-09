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
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          screens: './src/screens'
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
