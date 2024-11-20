const x = [7, 3, 2, 5, 6, 10, 9, 8, 1, 4];

// O(n²)
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentIndex = i;
    while (currentIndex > 0 && arr[currentIndex - 1] > arr[currentIndex]) {
      const tempValue = arr[currentIndex - 1];
      arr[currentIndex - 1] = arr[currentIndex];
      arr[currentIndex] = tempValue;
      currentIndex--;
    }
  }
  console.log(arr);
};

// insertionSort(x);

// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

// The steps of the insertion sort algorithm:

// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// It repeats until no input elements remain.
// The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Constraints:

// The number of nodes in the list is in the range [1, 5000].
// -5000 <= Node.val <= 5000

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const tail = new ListNode(3);
const node2 = new ListNode(1, tail);
const node1 = new ListNode(2, node2);
const head = new ListNode(4, node1);
//
//   4-2 2-1 1-3 3
//0

function insertionSortList(head) {
  if (!head || !head.next) {
    return head;
  }
  let result = null;
  let current = head;
  while (current) {
    const next = current.next;

    const tmp = new ListNode();
    tmp.next = result;
    let currentTemp = tmp;

    while (currentTemp.next && currentTemp.next.val < current.val) {
      currentTemp = currentTemp.next;
    }

    current.next = currentTemp.next;

    currentTemp.next = current;
    result = tmp.next;
    current = next;
  }

  return result;
}

console.log(JSON.stringify(insertionSortList(head), 0, 2));
