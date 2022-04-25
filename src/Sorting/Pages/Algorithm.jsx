import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//components
import AlgorithmDetails from '../Components/AlgorithmDetails';
import Breadcrumbs from '../Components/Breadcrumbs.jsx';

//list sorting algorithms
import tab from '../../Shared/List';

const Algorithm = () => {
   let param = useParams().name;
   const algo = tab.find(algo => algo.id === param);

   const [array, setArray] = useState([]);
   const [sorted, setSorted] = useState([]);
   const [see, setSee] = useState(false);
   const [runing, setRuning] = useState(false);

   //generate table
   const generateTab = n => {
      //fill in the table with random values
      let tab = [];
      for (let index = 0; index < n; index++) {
         tab[index] = Math.floor(Math.random() * 1000);
      }

      setArray(tab);

      if (tab.length !== 0) {
         setSee(true);
         setRuning(false);
      }
   };

   //start the sorting logic
   const handleStart = () => {
      const tab = [...array];
      const s = algo.sortingLogic(tab);
      setSorted(s);
      setRuning(true);
   };

   return (
      <div>
         <Breadcrumbs name={algo.name} lengthTab={generateTab} />
         <AlgorithmDetails
            algo={algo}
            run={handleStart}
            before={array}
            after={sorted}
            see={see}
            runing={runing}
         />
      </div>
   );
};

export default Algorithm;
