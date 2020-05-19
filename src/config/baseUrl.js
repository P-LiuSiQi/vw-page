/**
 * @description   请求基础路径
 */
let baseURL = ''

// 区分环境
let env = process.env.NODE_ENV === 'development' ? 'development'
  : process.env.VUE_APP_MODE === 'production' ? 'production'
    : process.env.VUE_APP_MODE === 'test' ? 'test'
      : 'develop'

switch (env) {
  case 'development':   // 开发环境
    baseURL = ''
    break;
  case 'develop':       // 开发线上环境
    baseURL = ''
    break;
  case 'test':          // 测试环境
    baseURL = ''
    break;
  case 'production':    // 生产环境
    baseURL = ''
    break;
}

export {
  baseURL
}
