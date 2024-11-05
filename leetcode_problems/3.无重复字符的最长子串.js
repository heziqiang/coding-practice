/*
3. 无重复字符的最长子串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
提示: 
0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
*/

/*
思路: 
滑动窗口，不重复则 j 右移，重复则 i 左移直到不重复。
使用 map 优化遍历时间复杂度。

边界情况: 字符串为空，直接返回 0。

时间复杂度 O(n)
空间复杂度 O(n)

类似题: 76. 最小覆盖子串
*/
function lengthOfLongestSubstring(s) {
  if (!s) return 0;
  let i = 0;
  let max = 0;
  let map = new Map();
  for (let j = 0; j < s.length; j++) {
    let char = s[j];
    // 存在重复，左指针右移缩小窗口 直到不重复
    while (map.has(char)) {
      map.delete(s[i]);
      i++;
    }
    map.set(char, 1);
    max = Math.max(max, j - i + 1);
  }
  return max;
}

// Test
console.log(lengthOfLongestSubstring('babcca')); // 3
console.log(lengthOfLongestSubstring('babcdca')); // 4
