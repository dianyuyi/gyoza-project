import NextJest from 'next/jest'

const createJestConfig = NextJest({
  dir: './',
})

const customJestConfig = {
  preset: 'ts-jest',
  setupFiles: ['raf/polyfill'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePaths: ['<rootDir>/src'],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    'node_modules/(?!swiper|ssr-window|dom7).*/',
    '<rootDir>/tailwind.config.*/',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/?!(swiper)'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^config(.*)$': '<rootDir>/config$1',
    '^src(.*)$': '<rootDir>/src$1',
    '^pages(.*)$': '<rootDir>/pages$1',
    '^server(.*)$': '<rootDir>/server$1',
    '^@hook(.*)$': '<rootDir>/src/hook$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      'babel-plugin-styled-components',
      { presets: ['next/babel'] },
    ],
  },
  collectCoverageFrom: [
    './{src,pages,server}/**/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/{config,constants,styles,types,__fixtures__}/**',
  ],
  watchPathIgnorePatterns: ['dist'],
}
module.exports = createJestConfig(customJestConfig)
