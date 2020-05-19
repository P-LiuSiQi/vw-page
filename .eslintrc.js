module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "semi": [0],    // 关闭语句强制分号结尾
    "no-mixed-spaces-and-tabs": [0],    //关闭禁止混用tab和空格
    "no-unused-vars": [2, {
      "vars": "local",    // 允许声明未使用变量
      "args": "none"      // 参数不检查
    }],
    "prefer-const": 0,    //首选const
  }
}
