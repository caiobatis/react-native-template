require('@testing-library/jest-native/extend-expect')

require('jest-styled-components')

const mockAsyncStorage = require('@react-native-async-storage/async-storage/jest/async-storage-mock')

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

jest.mock('react-native-device-info', () => {
  return {
    getVersion: () => 4
  }
})

beforeEach(() => {
  jest.resetModules()

  jest.resetAllMocks()

  jest.useFakeTimers()
})
