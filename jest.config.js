module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './test/setup.js'
  ],
  transformIgnorePatterns: [],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx', '!**/node_modules/**'],
  coverageReporters: ['html', 'text', 'text-summary', 'coverage'],
  testMatch: ['**/*.spec.ts', '**/*.spec.tsx']
}
