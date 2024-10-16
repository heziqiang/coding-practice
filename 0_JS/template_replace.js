// 实现 模板字符串匹配

// template = "{{name}}很厉害,才{{age}}岁"
// context = {name: '阿强', age: 25}
// render(template, context) 输出 "阿强很厉害,才25岁"

/*
  思路: 正则匹配双括号, 利用str.replace(regexp | str, str | function)
*/

function render(template, context) {
  return template.replace(/{{(.*?)}}/g, (match, key) => {
    return context[key.trim()];
  });
}

// Test
console.log(render('{{name}}很厉害, 才{{age  }}岁', { name: '阿强', age: 25 })); // "阿强很厉害,才25岁"
