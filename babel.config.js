module.exports = {
  plugins: [
    'react-native-reanimated/plugin',
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
          screens: './src/screens',
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
