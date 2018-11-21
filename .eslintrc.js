module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'react-app',

  parserOptions: {
    //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ['react', 'prettier'],
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    // indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: [0, 'single'], //引号类型 `` "" ''
    semi: ['error', 'always'],
    'no-unused-vars': 0,
    eqeqeq: [2, 'allow-null'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
};
