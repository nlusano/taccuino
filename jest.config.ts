import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  // bail: 0, // Stop running tests after `n` failures
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/components/ui/**", // ignore boilerplate components
  ],
  coverageDirectory: "coverage",
  coverageProvider: 'babel',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  testEnvironment: 'jsdom',
}

export default createJestConfig(config)