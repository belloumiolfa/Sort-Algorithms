import React from 'react';
import { useNavigate } from 'react-router-dom';

const SortingItem = props => {
   let navigate = useNavigate();

   const handleNavigate = () => {
      navigate(`/sorting/${props.item.id}`);
   };
   return (
      <div
         className='col-md-6 col-lg-4 d-flex align-items-stretch'
         data-aos='zoom-in'
         data-aos-delay='100'
      >
         <div className='icon-box' onClick={handleNavigate}>
            <div className='icon'>{props.item.icone}</div>
            <h4 className='title'>{props.item.name}</h4>
            <p className='description'>{props.item.description}</p>
         </div>
      </div>
   );
};

export default SortingItem;
