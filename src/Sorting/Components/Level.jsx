import React from 'react';

const Level = props => {
   const handleLevel = l => {
      props.level(l);
   };
   return (
      <div
         class='btn-group btn-group-sm'
         role='group'
         aria-label='Basic example'
      >
         <button
            type='button'
            class='btn btn-style'
            onClick={() => handleLevel('Best')}
         >
            Best
         </button>
         <button
            type='button'
            class='btn btn-style'
            onClick={() => handleLevel('Average')}
         >
            Average
         </button>
         <button
            type='button'
            class='btn btn-style'
            onClick={() => handleLevel('Worst')}
         >
            Worst
         </button>
      </div>
   );
};

export default Level;
