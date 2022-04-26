import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
   return (
      <section id='hero' className='d-flex align-items-center'>
         <div className='container'>
            <div className='row gy-4'>
               <div className='col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                  <h1>Discover Sorting algorithms with Make'it</h1>
                  <h2>
                     The term "sorting" in algorithms is very often attached to
                     the process of classifying a set of elements in a given
                     order. <br /> <br />
                     Sort by selection, sort by propagation, sort by insertion,
                     quick sort, sort by merge… these different methods each
                     have their particularities… and their level of performance,
                     which corresponds to the complexity of the algorithm.
                  </h2>
                  <br />
                  <h3>Learn more about the different sorting methods</h3>
                  <div>
                     <Link to='/sorting' className='btn-get-started scrollto'>
                        Get Started
                     </Link>
                  </div>
               </div>
               <div className='col-lg-6 order-1 order-lg-2 hero-img'>
                  <img
                     src='/assets/img/hero-img.svg'
                     className='img-fluid animated'
                     alt=''
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
