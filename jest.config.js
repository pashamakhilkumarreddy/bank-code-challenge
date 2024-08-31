/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: false,
  testEnvironment: 'node',
  preset: 'ts-jest'
};