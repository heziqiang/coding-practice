/*
49. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

/*
Approach:
Use a map where the key is sorted string, and the value is the list of its anagrams.
Iterate through strs, for each string, sort it and add it to the map.
Finally, return the map values.

Time complexity: O(n * k * log(k)), n is the length of strs, and k is the maximum string length, quick sort takes O(k * log(k)).
Space complexity: O(n * k) for map size
*/

function groupAnagrams(strs) {
  const map = new Map();
  for (let str of strs) {
    const sorted = str.split("").sort().join("");
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }
  return [...map.values()];
}

// Test
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [['']]
