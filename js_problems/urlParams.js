// 解析 URL Params 为对象

/**
 * 解析url参数，返回参数对象
 * @param url: string 链接地址
 * @return {[key: string]: any} 参数对象
 */

function parseUrlParams(url) {
  // 参数校验
  let queryStr = url.split('?')[1];
  if (!queryStr) return {};

  const res = {};
  if (queryStr.includes('#')) {
    // 去掉末尾hash部分
    queryStr = queryStr.split('#')[0];
  }
  queryStr.split('&').forEach((str) => {
    let [key, val] = str.split('=');
    // 布尔值true 简写
    if (val === undefined) {
      val = true;
    } else {
      val = decodeURIComponent(val);
      // 数字 还原类型
      if (/^\d+$/.test(val)) {
        val = Number(val);
      }
      // 多个重名 组合为数组
      if (res.hasOwnProperty(key)) {
        val = [].concat(res[key], val);
      }
    }
    res[key] = val;
  });
  return res;
}

// Test
let url =
  'http://www.domain.com/?user=django&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled#hash=hello';
console.log(parseUrlParams(url)); // { user: 'django', id: [ 123, 456 ], city: '北京', enabled: true }
console.log(parseUrlParams('')); // {}
console.log(parseUrlParams('https://qq.com')); // {}
