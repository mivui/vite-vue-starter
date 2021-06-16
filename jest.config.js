//yarn ts-jest config:init
module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass|styl)$': 'identity-obj-proxy',
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
    '^.+\\.(vue|md)$': 'vue-jest',
    '^.+\\.(js|jsx|tsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'vue'],
};
