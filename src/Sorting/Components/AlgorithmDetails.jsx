import React from 'react';
import { Link } from 'react-router-dom';
import Complexity from '../Pages/Complexity';
import SortingArrays from './SortingArrays';

const AlgorithmDetails = props => {
   const classN = props.see ? 'col-lg-3' : 'col-lg-12';

   return (
      <section id='portfolio-details' className='portfolio-details'>
         <div className='container'>
            <div className='row gy-4'>
               <div className='col-lg-9  '>
                  {props.see && (
                     <div>
                        <SortingArrays
                           before={props.before}
                           after={props.after}
                           runing={props.runing}
                        />
                        {props.runing && (
                           <Complexity
                              title='Complexity details'
                              compaire={false}
                              after={props.after}
                              algo={props.algo}
                           />
                        )}
                     </div>
                  )}
               </div>

               <div className={classN}>
                  <div className='portfolio-info'>
                     <h3>
                        Algorithm details
                        {props.see && (
                           <Link
                              to=''
                              className='btn-style float-right'
                              onClick={props.run}
                           >
                              Run
                           </Link>
                        )}
                     </h3>
                     <div className='portfolio-description'>
                        {props.algo.details}
                     </div>
                  </div>
               </div>
               <Link to='/sorting' className=' float-right'>
                  Back
               </Link>
            </div>
         </div>
      </section>
   );
};

export default AlgorithmDetails;
