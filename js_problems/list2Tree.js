// 将列表数据转化为树形结构（ pid 指向父级 id ）

// 转换前:
const source = [
  {
    id: 1,
    pid: 0,
    name: 'body',
  },
  {
    id: 2,
    pid: 1,
    name: 'content',
  },
  {
    id: 3,
    pid: 2,
    name: 'div',
  },
  {
    id: 4,
    pid: 1,
    name: 'header',
  },
];

// 转换为:
const tree = [
  {
    id: 1,
    pid: 0,
    name: 'body',
    children: [
      {
        id: 2,
        pid: 1,
        name: 'content',
        children: [
          {
            id: 3,
            pid: 2,
            name: 'div',
          },
        ],
      },
      {
        id: 4,
        pid: 1,
        name: 'header',
      },
    ],
  },
];

/*
思路: 
pid = 0 的为根结点，
使用 map 缓存所有结点方便查找，使用 id 作为 key。
遍历列表，先将自身挂载到 map； 然后以 pid 查找父结点，添加到其 children，因为是引用关联，每次只需要关心一层。
返回根结点。
*/
function list2Tree(list) {
  const map = {};
  for (let item of list) {
    // 先全部挂载到map
    map[item.id] = item;
  }
  for (let item of list) {
    let parent = map[item.pid]; // 找到父级，添加到 children
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return Object.values(map).filter((it) => it.pid === 0); // 返回 pid 为 0 的结点
}

// Test
console.log(JSON.stringify(list2Tree(source.reverse()))); // tree
