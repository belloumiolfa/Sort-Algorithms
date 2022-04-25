import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <header id='header' className='fixed-top d-flex align-items-center'>
         <div className='container d-flex align-items-center justify-content-between'>
            <div className='logo'>
               <h1 className='text-light'>
                  <Link to='/'>
                     <span>Make'it </span>
                  </Link>
               </h1>
            </div>

            {/*  <nav id='navbar' className='navbar'>
               <ul>
                  <li>
                     <a className='nav-link scrollto' href='#hero'>
                        Login
                     </a>
                  </li>
                  <li>
                     <a className='nav-link scrollto' href='#about'>
                        Register
                     </a>
                  </li>
               </ul>
               <i className='bi bi-list mobile-nav-toggle'></i>
            </nav> */}
         </div>
      </header>
   );
}

export default Header;
