module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'react-app',
  parserOptions: {
    ecmaVersion: {
      // http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    // indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 0,
    'prettier/prettier': 'error',
  },
};
