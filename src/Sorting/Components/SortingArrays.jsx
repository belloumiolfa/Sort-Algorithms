import React from 'react';
import Array from './Array';

const SortingArrays = props => {
   return (
      <div className='contact'>
         <div data-aos='fade-up' data-aos-delay='200'>
            <div className='info'>
               <Array array={props.before} title=' BEFORE sorting :' />
               {props.runing && (
                  <Array array={props.after} title='AFTER sorting :' />
               )}
            </div>
         </div>
      </div>
   );
};

export default SortingArrays;
