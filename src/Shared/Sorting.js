const swap = (arr, xp, yp) => {
   let temp = arr[xp];
   arr[xp] = arr[yp];
   arr[yp] = temp;
};
/**************************************************************************************************** */
const SelectionSort = tab => {
   const arr = tab;
   let i, j, min_idx;

   // One by one move boundary of unsorted subarray
   for (i = 0; i < arr.length - 1; i++) {
      // Find the minimum element in unsorted array
      min_idx = i;
      for (j = i + 1; j < arr.length; j++)
         if (arr[j] < arr[min_idx]) min_idx = j;

      // Swap the found minimum element with the first element
      swap(arr, min_idx, i);
   }
   return arr;
};
/**************************************************************************************************** */

const BubbleSort = arr => {
   let i, j;
   for (i = 0; i < arr.length - 1; i++) {
      for (j = 0; j < arr.length - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            swap(arr, j, j + 1);
         }
      }
   }
   return arr;
};
/**************************************************************************************************** */

const InsertionSort = arr => {
   let i, key, j;
   for (i = 1; i < arr.length; i++) {
      key = arr[i];
      j = i - 1;

      /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
      while (j >= 0 && arr[j] > key) {
         arr[j + 1] = arr[j];
         j = j - 1;
      }
      arr[j + 1] = key;
   }
   return arr;
};
/**************************************************************************************************** */

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
const Merge = (arr, l, m, r) => {
   let i, j, k;
   let n1 = m - l + 1;
   let n2 = r - m;

   /* create temp arrays */
   let L = Array(n1).fill(0);
   let R = Array(n2).fill(0);

   /*
    * Copy data to temp arrays L and R
    */
   for (i = 0; i < n1; i++) L[i] = arr[l + i];
   for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

   /*
    * Merge the temp arrays back into arr[l..r]
    */
   i = 0;
   j = 0;
   k = l;
   while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
         arr[k] = L[i];
         i++;
      } else {
         arr[k] = R[j];
         j++;
      }
      k++;
   }

   /*
    * Copy the remaining elements of L, if there are any
    */
   while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
   }

   /*
    * Copy the remaining elements of R, if there are any
    */
   while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
   }
};

const MergeSort = arr => {
   const n = arr.length;
   // For current size of subarrays to be merged curr_size leties from 1 to n/2
   let curr_size;

   // For picking starting index of left subarray to be merged
   let left_start;

   // Merge subarrays in bottom up manner. First merge subarrays of size 1 to create sorted
   // subarrays of size 2, then merge subarrays of size 2 to create sorted subarrays of size 4,
   //and so on.
   for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
      // Pick starting point of different subarrays of current size
      for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
         // Find ending point of left subarray. mid+1 is starting point of right
         let mid = Math.min(left_start + curr_size - 1, n - 1);

         let right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);

         // Merge Subarrays arr[left_start...mid] & arr[mid+1...right_end]
         Merge(arr, left_start, mid, right_end);
      }
   }
   return arr;
};
/**************************************************************************************************** */

/* This function takes last element as pivot, places the pivot element at its correct position in sorted array, and places all smaller (smaller than pivot) to left of pivot and all greater elements to right of pivot */
function partition(arr, low, high) {
   let temp;
   let pivot = arr[high];

   // index of smaller element
   let i = low - 1;
   for (let j = low; j <= high - 1; j++) {
      // If current element is smaller
      // than or equal to pivot
      if (arr[j] <= pivot) {
         i++;

         // swap arr[i] and arr[j]
         temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
      }
   }

   // swap arr[i+1] and arr[high]
   // (or pivot)

   temp = arr[i + 1];
   arr[i + 1] = arr[high];
   arr[high] = temp;

   return i + 1;
}
/* The main function that implements QuickSort() arr[] --> Array to be sorted,
    low --> Starting index,
    high --> Ending index */

const QuickSort = arr => {
   let l = 0,
      h = arr.length - 1;

   // Create an auxiliary stack
   let stack = new Array(h - l + 1);
   stack.fill(0);

   // initialize top of stack
   let top = -1;

   // push initial values of l and h to
   // stack
   stack[++top] = l;
   stack[++top] = h;

   // Keep popping from stack while
   // is not empty
   while (top >= 0) {
      // Pop h and l
      h = stack[top--];
      l = stack[top--];

      // Set pivot element at its
      // correct position in
      // sorted array
      let p = partition(arr, l, h);

      // If there are elements on
      // left side of pivot, then
      // push left side to stack
      if (p - 1 > l) {
         stack[++top] = l;
         stack[++top] = p - 1;
      } // If there are elements on
      // right side of pivot, then
      // push right side to stack
      if (p + 1 < h) {
         stack[++top] = p + 1;
         stack[++top] = h;
      }
   }
   return arr;
};
/**************************************************************************************************** */

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
const heapify = (arr, n, i) => {
   let largest = i; // Initialize largest as root
   let l = 2 * i + 1; // left = 2*i + 1
   let r = 2 * i + 2; // right = 2*i + 2

   // If left child is larger than root
   if (l < n && arr[l] > arr[largest]) largest = l;

   // If right child is larger than largest so far
   if (r < n && arr[r] > arr[largest]) largest = r;

   // If largest is not root
   if (largest != i) {
      let swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;

      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
   }
};
const HeapSort = arr => {
   let n = arr.length;

   // Build heap (rearrange array)
   for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

   // One by one extract an element from heap
   for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // call max heapify on the reduced heap
      heapify(arr, i, 0);
   }
   return arr;
};

const Sorting = {
   SelectionSort,
   BubbleSort,
   InsertionSort,
   MergeSort,
   QuickSort,
   HeapSort,
};
export default Sorting;
//recursive quicksort and merge
