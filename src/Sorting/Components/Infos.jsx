import React from 'react';

const Infos = props => {
   return (
      <div className='info'>
         <i class='bi bi-alarm'></i>

         <h5>Time Complexity</h5>
         <p> {props.time}</p>

         <i class='bi bi-sd-card-fill'></i>
         <h5>Auxiliary Space</h5>
         <p>{props.aux} </p>

         <i class='bi bi-bootstrap-reboot'></i>
         <h5>Stability </h5>
         <p>{props.stability}</p>

         <i class='bi bi-bookmark-check-fill'></i>
         <h5>In Place </h5>
         <p>{props.place}</p>
      </div>
   );
};

export default Infos;
