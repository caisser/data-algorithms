/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4


Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/

const k = 2;
const x = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

//                                15
//                      14                   13
//                  7       5            3      9
//                8    12  6  11       4    10   2  1
const minHeapify = (array, heapSize, index) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let smallest = index;
  if (left < heapSize && array[smallest] > array[left]) {
    smallest = left;
  }
  if (right < heapSize && array[smallest] > array[right]) {
    smallest = right;
  }
  if (smallest != index) {
    const temp = array[index];
    array[index] = array[smallest];
    array[smallest] = temp;
    minHeapify(array, heapSize, smallest);
  }
};

const maxHeapify = (array, heapSize, index) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;
  if (left < heapSize && array[largest] < array[left]) {
    largest = left;
  }
  if (right < heapSize && array[largest] < array[right]) {
    largest = right;
  }
  if (largest != index) {
    const temp = array[index];
    array[index] = array[largest];
    array[largest] = temp;
    maxHeapify(array, heapSize, largest);
  }
};

const kthLargest = (nums, k) => {
  let result;
  for (let i = Math.floor(nums.length / 2 - 1); i >= 0; i--) {
    maxHeapify(nums, nums.length, i);
  }
  let removed = 0;
  while (removed != k) {
    // swap last element with first element
    const temp = nums[nums.length - 1];
    nums[nums.length - 1] = nums[0];
    nums[0] = temp;
    // note that we reduce the heap size by 1 every iteration
    result = nums.pop();
    removed++;
    maxHeapify(nums, nums.length, 0);
  }
  return result;
};

// const kthLargest = (nums, k) => {
//   let result;
//   if (k > nums.length / 2) {
//     while (nums.length >= k) {
//       for (let i = Math.ceil(nums.length / 2 - 1); i >= 0; i--) {
//         minHeapify(nums, nums.length, i);
//       }
//       result = nums.shift();
//     }
//   } else {
//     let removed = 0;
//     while (removed != k) {
//       for (let i = Math.ceil(nums.length / 2 - 1); i >= 0; i--) {
//         maxHeapify(nums, nums.length, i);
//       }
//       result = nums.shift();
//       removed++;
//     }
//   }
//   return result;
// };

console.log(kthLargest(x, k));
