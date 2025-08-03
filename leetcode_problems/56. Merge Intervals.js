/*
56. Merge Intervals
Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example:
Input: intervals = [[8,10],[1,3],[2,6],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/*
Approach:
Sort intervals by their start value.
Initialize prev as the first interval, iterate through intervals from the second, if prev overlaps with the current inteval, merge them;
otherwise, add prev to the result and update prev to the current inteval.
Finally, add the last prev to the result, return the result.
*/

function merge(intervals) {
  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]); // don't modify param
  const result = [];
  let prev = sortedIntervals[0];
  for (let cur of sortedIntervals.slice(1)) {
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      result.push(prev);
      prev = cur;
    }
  }
  result.push(prev);
  return result;
}

// Test
console.log(
  merge([
    [8, 10],
    [1, 3],
    [2, 6],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 3]])); // [[1,3]]
