import React, { useState } from 'react';
import Breadcrumbs from '../Components/Breadcrumbs';
import Comments from '../Components/Comments';
import Courbe from '../Components/Courbe';
import tab from '../../Shared/List';
import ChartAlgo from '../Components/ChartAlgo';
import Complexity from './Complexity';
import AlgorithmDetails from '../Components/AlgorithmDetails';
import Level from '../Components/Level';
import { Link } from 'react-router-dom';

const Compaire = () => {
   const [array, setArray] = useState([]);
   const [runing, setRuning] = useState(false);
   const [level, setlevel] = useState('Worst');

   const handleLevel = l => {
      setlevel(l);
   };

   //generate table
   const generateTab = n => {
      //fill in the table with random values
      let tab = [];
      for (let index = 0; index < n; index++) {
         tab[index] = Math.floor(Math.random() * 1000);
      }

      setArray(tab);

      if (tab.length !== 0) {
         setRuning(false);
      }
      setRuning(true);
   };
   return (
      <div>
         <Breadcrumbs name='Compaire Algorithms' lengthTab={generateTab} />
         <div className='container'>
            <Level level={handleLevel} />
            <div className='row'>
               {tab.map((algo, index) => (
                  <div
                     className='col-md-6 col-lg-4 '
                     data-aos='zoom-in'
                     data-aos-delay='100'
                  >
                     <Complexity
                        title={`Algorithm: ${algo.name}`}
                        compaire={true}
                        after={array}
                        algo={algo}
                        level={level}
                     />
                  </div>
               ))}
            </div>
            <Link to='/sorting' className=' float-right'>
               Back
            </Link>
         </div>
      </div>
   );
};

export default Compaire;
