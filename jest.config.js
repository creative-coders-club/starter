module.exports = {
  verbose: true, // verbose 는 테스트 수행시 테스트 내용 확인
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/**/*.d.{ts,tsx}',
  ],
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
