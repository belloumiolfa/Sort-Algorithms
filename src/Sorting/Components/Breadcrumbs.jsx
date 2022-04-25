import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Breadcrumbs = props => {
   const { register, handleSubmit } = useForm();

   const [tabLength, setTabLength] = useState([]);

   const onSubmitButton = data => {
      switch (data.tabLength) {
         case 'Small':
            setTabLength(Math.floor(Math.random() * (21 - 3) + 3));
            break;
         case 'Medium':
            setTabLength(Math.floor(Math.random() * (100 - 20) + 20));
            break;
         case 'Large':
            setTabLength(Math.floor(Math.random() * (10000 - 1000) + 1000));
            break;
         default:
            setTabLength(Math.floor(Math.random() * (21 - 3) + 3));
      }
   };
   useEffect(() => {
      props.lengthTab(tabLength);
   }, [tabLength]);

   return (
      <section className='breadcrumbs'>
         <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
               <h2>{props.name}</h2>
               <form
                  id='navbar'
                  className='navbar'
                  onSubmit={handleSubmit(onSubmitButton)}
               >
                  <div className='form-check form-check-inline'>
                     <input
                        {...register('tabLength')}
                        className='form-check-input'
                        type='radio'
                        name='tabLength'
                        id='Small'
                        value='Small'
                     />
                     <label className='form-check-label' htmlFor='small'>
                        Small
                     </label>
                  </div>
                  <div className='form-check form-check-inline'>
                     <input
                        {...register('tabLength')}
                        className='form-check-input'
                        type='radio'
                        name='tabLength'
                        id='Medium'
                        value='Medium'
                     />
                     <label className='form-check-label' htmlFor='Medium'>
                        Medium
                     </label>
                  </div>
                  <div className='form-check form-check-inline'>
                     <input
                        {...register('tabLength')}
                        className='form-check-input'
                        type='radio'
                        name='tabLength'
                        id='Large'
                        value='Large'
                     />
                     <label className='form-check-label' htmlFor='Large'>
                        Large
                     </label>
                  </div>
                  <button type='submit' className='btn btn-warning'>
                     Generate
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Breadcrumbs;
