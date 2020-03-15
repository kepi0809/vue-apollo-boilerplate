module.exports = {
  setupFiles: ['<rootDir>/tests/unit/setup'],
  setupFilesAfterEnv: ['<rootDir>/tests/unit/matchers'],
  testMatch: ['**/(*.)unit.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|scss|jpe?g|png|gif|webp|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    '^@src(.*)': '<rootDir>/src$1',
    '^@assets(.*)': '<rootDir>/src/assets$1',
    '^@components(.*)': '<rootDir>/src/components$1',
    '^@layouts(.*)': '<rootDir>/src/layouts$1',
    '^@utils(.*)': '<rootDir>/src/utils$1',
    '^@views(.*)': '<rootDir>/src/views$1',
    '^@(/.*)': '<rootDir>/src$1',
  },
  globals: {
    'vue-jest': {
      // Compilation errors in the <style> tags of Vue components will
      // already result in failing builds, so compiling CSS during unit
      // tests doesn't protect us from anything. It only complicates
      // and slows down our unit tests.
      experimentalCSSCompile: false,
    },
  },
  snapshotSerializers: ['jest-serializer-vue'],
}
