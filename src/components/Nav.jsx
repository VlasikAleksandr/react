
import React from 'react';
import './Nav.css';

const Nav = () => {
   return (
      <nav className='navigation'>
         <div>
            <a>Profile</a>
         </div>
         <div>
            <a>Messages</a>
         </div>
         <div>
            <a>News</a>
         </div>
         <div>
            <a>Musik</a>
         </div>
         <div>
            <a>Settings</a>
         </div>
      </nav>
   );
}
export default Nav