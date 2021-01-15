export const uselessFilesMatch = [
  // TS
  '**/src/**/*.ts',
  '**/*.d.ts',
  '**/@types/**/*',
  '**/.mwcc-cache/**/*',

  // Map File
  '**/*.ts.map',
  '**/*.js.map',

  // Test File
  "**/test.js",
  '**/*.test.js',
  '**/*.test.ts',
  '**/test/**/*',
  '**/tests/**/*',
  '**/coverage/**/*',

  // Example
  '**/example/**/*',
  '**/examples/**/*',
  "**/example.png",

  // CI/CD
  '**/travis.yml',
  '**/.travis.yml',
  '**/.coveralls.yml',
  '**/.aoneci.yml',
  '**/Makefile',
  '**/.babelrc',
  '**/benchmarks/**/*',
  '**/.codeclimate.yml',
  '**/.airtap.yml',
  '**/.zuul.yml',
  '**/.coveralls.yml',
  "**/.istanbul.yml",
  
  // LINT
  '**/.jshintrc',
  '**/.eslintrc',
  '**/tslint.json',
  '**/.eslintrc.*',
  '**/.nycrc',
  '**/.eslintignore',
  '**/.jshintignore',
  "**/.lint",
  "**/.lintignore",

  // License、ChangeLog、HISTORY and Other Text
  '**/LICENSE',
  '**/LICENSE.txt',
  '**/license',
  "**/license-mit",
  '**/MIT-LICENSE.txt',
  '**/LICENSE-MIT.txt',
  '**/CHANGELOG.*',
  '**/README.*',
  '**/CHANGES.*',
  '**/AUTHORS',
  '**/HISTORY',
  '**/usage.txt',
  '**/*.md',
  '**/*.markdown',

  // Editor
  '**/.vs/**/*',
  '**/.idea/**/*',
  "**/.editorconfig",

  // Useless Files
  '**/.npmignore',
  '**/.npmrc',
  '**/.nvmrc',
  '**/dockerfile',
  '**/package-lock.json',
  "**/*.log",
  "**/midway.build.json",

  // GIT
  '**/.github/**/*',
  "**/.gitignore",
  '**/.gitattributes',
  '**/.gitmodules',
  '**/.gitkeep'
];