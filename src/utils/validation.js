// 表单验证规则
export const Validation = {
  // 编码
  codeRule: (rule, value, callback) => {
    if (value === '') {
      return callback(new Error('请输入必填字段'))
    } else if (!/^[0-9a-zA-Z]+$/.test(value)) {
      return callback(new Error('内容格式错误'))
    } else if (value.toString().length !== 4) {
      return callback(new Error('内容格式错误,请输入4位数字或英文字母'))
    } else {
      callback()
    }
  },
}
