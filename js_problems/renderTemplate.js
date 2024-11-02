// 实现 模板字符串匹配
function renderTemplate(template, context) {
  return template.replace(/{{(.*?)}}/g, (match, key) => {
    return context[key.trim()];
  });
}

// Test
console.log(
  renderTemplate('{{name}}很厉害, 才{{  age  }}岁', { name: '阿强', age: 25 })
); // "阿强很厉害, 才25岁"
