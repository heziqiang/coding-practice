/*
121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the i'th day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example:
Input: prices = [7,1,5,3,6,4]
Output: 5

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

/*
Approach:
Use variable buy for the lowest buying price, and maxProfit for the maximum profit so far.
Iterate through the prices, updating maxProfit and buy as needed.
Finally, return maxProfit.

Time complexity: O(n)
Space complexity: O(1)
*/

function maxProfit(prices) {
  let maxProfit = 0;
  let buy = prices[0];
  for (let price of prices) {
    if (price - buy > maxProfit) {
      maxProfit = price - buy;
    }
    if (price < buy) {
      buy = price;
    }
  }
  return maxProfit;
}

// Test
console.log(maxProfit([3, 2, 7, 1, 4, 5])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1])); // 0
