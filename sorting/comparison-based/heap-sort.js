// O(NlogN)
const heapSort = (array) => {
  for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
    maxHeapify(array, array.length, i);
  }

  for (let i = array.length - 1; i > 0; i--) {
    // swap last element with first element
    const temp = array[i];
    array[i] = array[0];
    array[0] = temp;
    // note that we reduce the heap size by 1 every iteration
    maxHeapify(array, i, 0);
  }
};

const maxHeapify = (array, heapSize, index) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;
  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }
  if (largest != index) {
    const temp = array[index];
    array[index] = array[largest];
    array[largest] = temp;
    maxHeapify(array, heapSize, largest);
  }
};

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

const x = [5, 1, 1, 2, 0, 0];

heapSort(x);
console.log(x);
