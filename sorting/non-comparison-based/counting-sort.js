/*
[9,4,4,1,6,6,7]
Create array of length equal to max value + 1
[0 ,1, 0, 0, 2, 0, 2, 1, 0, 1]
create starting index array, starging in 0 and ading the count each iteration
[0, 1, 1, 1, 3, 3, 5, 7, 6, 7]
[1, 4, 4, 6, 6, 7, 9]
*/
//O(N+K)
const countingSort = (arr) => {
  let sortedArray = new Array(arr.length);
  const shift = Math.min(...arr);
  const k = Math.max(...arr) - shift;

  let counts = new Array(k + 1);
  counts.fill(0);
  arr.forEach((element) => {
    counts[element - shift] += 1;
  });

  let startingIndex = 0;
  for (let i = 0; i < k + 1; i++) {
    const count = counts[i];
    counts[i] = startingIndex;
    startingIndex += count;
  }

  arr.forEach((element) => {
    sortedArray[counts[element - shift]] = element;
    counts[element - shift] += 1;
  });

  return sortedArray;
};

const x = [5, 5, 2, -2, -5, 3, 6];
countingSort(x);

/*
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 
Constraints:

2 <= arr.length <= 105
-106 <= arr[i] <= 106
*/
const arr = [3, 8, -10, 23, 19, -4, -14, 27];

let result = [];
arr.sort((a, b) => a - b);

let minDiff = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < arr.length - 1; i++) {
  const diff = Math.abs(arr[i] - arr[i + 1]);

  if (diff < minDiff) {
    minDiff = diff;
    result = [[arr[i], arr[i + 1]]];
    continue;
  } else if (diff === minDiff) {
    result.push([arr[i], arr[i + 1]]);
  }
}

console.log(result);
