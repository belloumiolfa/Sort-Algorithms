import Infos from '../Sorting/Components/Infos';
import Sorting from './Sorting';

const tab = [
   {
      id: 'Selection',
      icone: <i class='bi bi-dice-1-fill'></i>,
      performance: (
         <Infos
            time='O(n2) as there are two nested loops.'
            aux='O(1)'
            stability='Is not stable'
            place='Yes, it does not require extra space.'
         />
      ),
      sortingLogic: Sorting.SelectionSort,
      name: 'Selection Sort',
      details: (
         <p>
            The selection sort algorithm sorts an array by repeatedly finding
            the minimum element (considering ascending order) from unsorted part
            and putting it at the beginning. The algorithm maintains two
            subarrays in a given array.
            <br />
            1- The subarray which is already sorted.
            <br />
            2- Remaining subarray which is unsorted. <br />
            In every iteration of selection sort, the minimum element
            (considering ascending order) from the unsorted subarray is picked
            and moved to the sorted subarray.
         </p>
      ),
      description:
         'The selection sort algorithm sorts an array by repeatedly finding the minimum / maximum element from unsorted part and putting it at the beginning.',
   },
   {
      id: 'Bubble',
      icone: <i class='bi bi-dice-2'></i>,
      performance: (
         <Infos
            time='O(n2) The worst-case occurs when an array is reverse sorted.'
            aux='O(1)'
            stability=' Yes,Due to its simplicity. '
            place='Yes, it does not require extra space.'
         />
      ),
      sortingLogic: Sorting.BubbleSort,
      name: 'Bubble Sort',
      details: (
         <p>
            Bubble Sort is the simplest sorting algorithm that works by
            repeatedly swapping the adjacent elements if they are in the wrong
            order.
         </p>
      ),
      description:
         ' Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.',
   },
   {
      id: 'Insertion',
      icone: <i class='bi bi-dice-3-fill'></i>,
      performance: (
         <Infos
            time='O(n2) The worst-case occurs when an array is reverse sorted.'
            aux='O(1)'
            stability=' Yes,Due to its simplicity. '
            place='Yes, it does not require extra space.'
         />
      ),
      sortingLogic: Sorting.InsertionSort,
      name: 'Insertion Sort',
      details: (
         <p>
            Insertion sort is a simple sorting algorithm that works similar to
            the way you sort playing cards in your hands. The array is virtually
            split into a sorted and an unsorted part. Values from the unsorted
            part are picked and placed at the correct position in the sorted
            part.
            <br /> Algorithm <br />
            To sort an array of size n in ascending order: <br />
            1: Iterate from arr[1] to arr[n] over the array. <br />
            2: Compare the current element (key) to its predecessor. <br />
            3: If the key element is smaller than its predecessor, compare it to
            the elements before. Move the greater elements one position up to
            make space for the swapped element.
         </p>
      ),
      description:
         ' The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.',
   },
   {
      id: 'QuickSort',
      icone: <i class='bi bi-dice-4'></i>,
      performance: (
         <Infos
            time='n log(n), The worst case occurs when the partition process always picks greatest or smallest element as pivot with an O(n2)  '
            aux='O(1)'
            stability=' The default implementation is not stable. '
            place='As per the broad definition of in-place algorithm it qualifies as an in-place sorting algorithm as it uses extra space only for storing recursive function calls but not for manipulating the input. '
         />
      ),
      sortingLogic: Sorting.QuickSort,
      name: 'QuickSort',
      details: (
         <p>
            Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It
            picks an element as pivot and partitions the given array around the
            picked pivot. There are many different versions of quickSort that
            pick pivot in different ways. <br />
            1- Always pick first element as pivot.
            <br />
            2- Always pick last element as pivot (implemented below) <br />
            3- Pick a random element as pivot.
            <br />
            4- Pick median as pivot. <br />
            The key process in quickSort is partition(). Target of partitions
            is, given an array and an element x of array as pivot, put x at its
            correct position in sorted array and put all smaller elements
            (smaller than x) before x, and put all greater elements (greater
            than x) after x.
         </p>
      ),
      description:
         'It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. ',
   },
   {
      id: 'Merge',
      icone: <i class='bi bi-dice-5-fill'></i>,
      performance: (
         <Infos
            time='Time complexity of Merge Sort is  θ(nLogn) in all 3 cases (worst, average and best).'
            aux='O(n)'
            stability='Yes.'
            place='No in a typical implementation.'
         />
      ),
      sortingLogic: Sorting.MergeSort,
      name: 'Merge Sort',
      details: (
         <p>
            Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It
            divides the input array into two halves, calls itself for the two
            halves, and then merges the two sorted halves. <br />
            The merge() icone:'',performance:'',sortingLogic is used for merging
            two halves. The merge(arr, l, m, r) is a key process that assumes
            that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted
            sub-arrays into one.
         </p>
      ),
      description:
         'It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.',
   },
   {
      id: 'HeapSort',
      icone: <i class='bi bi-dice-6'></i>,
      performance: (
         <Infos
            time='Time complexity of heapify is O(Logn). Time complexity of createAndBuildHeap() is O(n) and the overall time complexity of Heap Sort is O(nLogn).'
            aux='O(1)'
            stability=' Yes. '
            place='Yes.'
         />
      ),
      sortingLogic: Sorting.HeapSort,
      name: 'HeapSort',
      details: (
         <p>
            Heap sort is a comparison-based sorting technique based on Binary
            Heap data structure. It is similar to selection sort where we first
            find the minimum element and place the minimum element at the
            beginning. We repeat the same process for the remaining elements.
            <br />
            What is Binary Heap?
            <br /> Let us first define a Complete Binary Tree. A complete binary
            tree is a binary tree in which every level, except possibly the
            last, is completely filled, and all nodes are as far left as
            possible (Source Wikipedia) <br /> A Binary Heap is a Complete
            Binary Tree where items are stored in a special order such that the
            value in a parent node is greater(or smaller) than the values in its
            two children nodes. The former is called max heap and the latter is
            called min-heap.
         </p>
      ),
      description:
         'It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.',
   },
];

export default tab;
