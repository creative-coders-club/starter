module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', '!src/**/index.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/serviceWorker.ts',
    '/src/react-app-env.d.ts',
    'reportWebVitals.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
};
