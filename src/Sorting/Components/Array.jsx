import React, { useEffect, useState } from 'react';

const Array = props => {
   const [loading, setloading] = useState(true);
   useEffect(() => {
      setloading(false);
   }, [props.array]);

   return (
      <div className='section-title'>
         <p>
            {props.title} N={props.array.length}
         </p>
         {!loading && (
            <div class='table-responsive'>
               <table className='table table-bordered'>
                  <tbody>
                     <tr>
                        {props.array.map((val, index) => (
                           <td key={index}>{val}</td>
                        ))}
                     </tr>
                  </tbody>
               </table>
            </div>
         )}

         {loading === true && props.title === 'AFTER sorting :' && (
            <div class='spinner-border text-warning' role='status'>
               <span class='visually-hidden'>Loading...</span>
            </div>
         )}
      </div>
   );
};

export default Array;
