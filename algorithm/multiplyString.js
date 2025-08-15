/**
 * Multiply String - many to many
 * @param {string} num1
 * @param {string} num2
 */
function multiplyManyToMany(num1, num2) {
  let res = "";
  for (let i = num2.length - 1; i >= 0; i--) {
    let tempRes = "";
    // append 0 at the end
    for (let j = 0; j < num2.length - 1 - i; j++) {
      tempRes += "0";
    }
    tempRes = multiplyManyToOne(num1, num2[i]) + tempRes;
    res = addTwoString(res, tempRes);
  }
  return res;
}

/**
 * Multiply String - many to one
 * @param {string} num1
 * @param {char} x
 * @return {string}
 */
function multiplyManyToOne(num1, x) {
  let res = [];
  let carry = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    let product = Number(num1[i]) * Number(x) + carry;
    let mod = product % 10;
    res.unshift(mod);
    carry = Math.floor(product / 10);
  }
  if (carry) {
    res.unshift(carry);
  }
  return res.join("");
}

/*
Add Two String
Approach:
Use two pointers to iterate through both strings from right to left.
At each step, add the corresponding digits along with the carry from the previous step.
*/

/**
 * Add String
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addTwoString(num1, num2) {
  let res = [];
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0 || carry) {
    let sum = Number(num1[i] || 0) + Number(num2[j] || 0) + carry;
    let mod = sum % 10;
    res.unshift(mod);
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return res.join("");
}

// Test
console.log(multiplyManyToOne("123", "5")); // '615'
console.log(multiplyManyToOne("123", "4")); // '492'
console.log(addTwoString("615", "4920")); // '5535'
console.log(multiplyManyToMany("123", "45")); // '5535'
