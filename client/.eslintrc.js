module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  globals: {
    ITodo: 'writable',
    IFormData: 'writable',
    TodoProps: 'writable',
    test: 'readonly',
    expect: 'readonly'
  },
  overrides: [
    {
      files: ['**/**.d.ts'],
      rules: {
        'no-unused-vars': 'off'
      }
    }
  ],
  rules: {
    'no-use-before-define': 'off'
  }
}
