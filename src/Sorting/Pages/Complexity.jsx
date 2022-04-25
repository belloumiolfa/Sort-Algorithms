import React, { useState } from 'react';
import ChartAlgo from '../Components/ChartAlgo';
import Level from '../Components/Level';

const Complexity = props => {
   const [level, setlevel] = useState('Worst');

   const handleLevel = l => {
      setlevel(l);
   };
   if (props.compaire) {
      return (
         <section className=' contact' data-aos='fade-up' data-aos-delay='200'>
            <div className='section-title'>
               <h2>{` ${props.title}`}</h2>
            </div>
            <ChartAlgo
               type={props.algo.id}
               data={props.after}
               level={props.level}
            />
         </section>
      );
   }
   return (
      <section className=' contact' data-aos='fade-up' data-aos-delay='200'>
         <div className='section-title'>
            <h2>{` ${props.title}`}</h2>
         </div>

         <div className='row'>
            <div
               className='col-lg-5 d-flex align-items-stretch'
               data-aos='fade-up'
               data-aos-delay='100'
            >
               {props.algo.performance}
            </div>

            <div
               className='col-lg-7 mt-5 mt-lg-0'
               data-aos='fade-up'
               data-aos-delay='200'
            >
               {' '}
               <Level level={handleLevel} />
               <div className='info '>
                  <ChartAlgo
                     type={props.algo.id}
                     data={props.after}
                     level={level}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Complexity;
