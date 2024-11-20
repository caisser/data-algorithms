const x = [7, 3, 2, 5, 6, 10, 9, 8, 1];

const _ = (a, b) => {
  return a;
};

// O(n²)
const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // const tempValue = arr[minIndex];
    // arr[minIndex] = arr[i];
    // arr[i] = tempValue;
    arr[i] = _(arr[minIndex], (arr[minIndex] = arr[i]));
  }
  console.log(arr);
};

sort(x);

/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/
// const nums = [2, 1, 2, 0, 2, 0, 1, 2, 2, 1, 1, 0, 0, 0, 1];

// var sortColors = function (nums) {
//   let one = 0;
//   let two = 0;
//   let zero = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) zero++;
//     else if (nums[i] === 1) one++;
//     else if (nums[i] === 2) two++;
//   }

//   for (let i = 0; i < zero; i++) {
//     nums[i] = 0;
//   }
//   for (let i = zero; i < zero + one; i++) {
//     nums[i] = 1;
//   }
//   for (let i = zero + one; i < zero + one + two; i++) {
//     nums[i] = 2;
//   }
//   console.log(nums);
// };

// sortColors(nums);
