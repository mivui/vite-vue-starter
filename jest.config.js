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
    '**/__tests__/**/*.+(js|ts|tsx)',
    '**/?(*.)+(spec|test).+(js|ts|tsx)',
  ],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
    '^.+\\.(vue)$': 'vue-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'vue'],
};
