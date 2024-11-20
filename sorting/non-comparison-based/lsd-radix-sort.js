//O(W(N+K))
const arr = [831, 443, 256, 336, 736, 907];
const NUM_DIGITS = 10;

const lsdRadixSort = (arr) => {
  let maxElem = Number.MIN_SAFE_INTEGER;
  arr.forEach((element) => {
    if (element > maxElem) {
      maxElem = element;
    }
  });

  let placeVal = 1;
  while (maxElem / placeVal > 0) {
    countingSort(arr, placeVal);
    placeVal *= 10;
  }
};
const countingSort = (arr, placeVal) => {
  let counts = new Array(NUM_DIGITS);
  counts.fill(0);
  arr.forEach((element) => {
    const current = element / placeVal;
    counts[Math.ceil(current % NUM_DIGITS)] += 1;
  });

  let startingIndex = 0;
  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    counts[i] = startingIndex;
    startingIndex += count;
  }

  let sortedArray = new Array(arr.length);

  arr.forEach((element) => {
    const current = element / placeVal;
    sortedArray[counts[Math.ceil(current % NUM_DIGITS)]] = element;
    counts[Math.ceil(current % NUM_DIGITS)] += 1;
  });

  for (let i = 0; i < arr.length; i++) {
    arr[i] = sortedArray[i];
  }
};

lsdRadixSort(arr);
console.log(arr);
