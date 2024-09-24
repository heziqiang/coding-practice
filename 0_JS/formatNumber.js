// 数字格式化 每千分位用逗号隔开

/**
 * @param n:number 待处理的数字
 * @return string 数字的千位分割字符串
 */
function formatNumber(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('参数必须是数字');
  }
  // 拆分为整数、小数 分别处理
  const [integer, decimal] = String(n).split('.');
  let res = '';
  for (let i = 0; i < integer.length; i++) {
    // 注意刚开始 i=0 不需要加逗号
    if (i > 0 && i % 3 === 0) {
      res = ',' + res;
    }
    // 整数部分 从后往前数
    res = integer[integer.length - 1 - i] + res;
  }
  // 小数直接添加，注意补充点号
  if (decimal) {
    res += `.${decimal}`;
  }
  return res;
}

// Test
console.log(formatNumber(1234567.89)); // '1,234,567.89'
console.log(formatNumber(123456)); // '123,456'
console.log(formatNumber(NaN)); // ''
console.log(formatNumber()); // ''
