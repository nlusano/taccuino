import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  // bail: 0, // Stop running tests after `n` failures
  clearMocks: true,
  collectCoverage: true,
  // collectCoverageFrom: undefined, // An array of glob patterns indicating a set of files for which coverage information should be collected
  coverageDirectory: "coverage",
  coverageProvider: 'v8',
  moduleNameMapper: {
    // ...
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  testEnvironment: 'jsdom',
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Add more setup options before each test is run
}

export default createJestConfig(config)