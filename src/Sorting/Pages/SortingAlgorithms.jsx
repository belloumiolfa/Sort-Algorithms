import React from 'react';
import { Link } from 'react-router-dom';
import tab from '../../Shared/List';
import SortingItem from '../Components/SortingItem';
//list of sorting algorithms
function SortingAlgorithms() {
   return (
      <section id='services' className='services section-bg'>
         <div className='container' data-aos='fade-up'>
            <div className='section-title'>
               <h2>Check out the algorithm list</h2>
            </div>
            <div className='row'>
               {tab.map((algo, index) => (
                  <SortingItem key={index} item={algo} />
               ))}
            </div>

            <Link to='/compaire' className='btn-style float-right'>
               Compaire
            </Link>
         </div>
      </section>
   );
}

export default SortingAlgorithms;
