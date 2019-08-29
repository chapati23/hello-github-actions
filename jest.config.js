// @flow
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!test',
    '!src/start-server.js',
    '!src/index.js',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 0,
      functions: 90,
      lines: 80,
    },
  },
  errorOnDeprecated: true,
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/?(*.)test.js?(x)'],
  transform: {
    '\\.js$': './config/jest/transform-flow',
  },
}
