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
    "src/app/**/*.{ts,tsx}",
    "!src/components/ui/**", // ignore boilerplate components
    "!src/app/layout.tsx",
  ],
  coverageDirectory: "coverage",
  coverageProvider: 'babel',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    "src/__tests__/fixtureData/labels.ts", // ignore fixture data
  ]
}

export default createJestConfig(config)