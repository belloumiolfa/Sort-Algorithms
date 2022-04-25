const sqrN = data => {
   return data.map(n => n * n);
};
const nLogN = data => {
   return data.map(n => n * Math.log(n));
};

const n = data => {
   return data;
};

const dictionary = {
   Selection: { best: sqrN, average: sqrN, worst: sqrN },
   Bubble: { best: n, average: sqrN, worst: sqrN },
   Insertion: { best: n, average: sqrN, worst: sqrN },
   QuickSort: { best: nLogN, average: nLogN, worst: sqrN },
   Merge: { best: nLogN, average: nLogN, worst: nLogN },
   HeapSort: { best: nLogN, average: nLogN, worst: nLogN },
};

export const calculate = (data, type, level) => {
   const labels = data.map((_, index) => index);

   let claculatedData;
   switch (level) {
      case 'Average':
         claculatedData = dictionary[type].average(labels);
         break;

      case 'Best':
         claculatedData = dictionary[type].best(labels);
         break;

      default:
         claculatedData = dictionary[type].worst(labels);
         break;
   }

   return { labels, claculatedData };
};
