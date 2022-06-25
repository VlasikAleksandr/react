
import React from 'react';
import { NavLink } from 'react-router-dom';
import FreindContainer from '../Nav/Freinds/FreindsContainer';
import s from './Nav.module.css';
// className={navData => navData.isActive ? s.active : ''
const Nav = (props) => {
   return (
      <nav className={s.navigation}>
         <div className={s.navigationLink}>
            <NavLink to='/profile' className={navData => navData.isActive ? s.active : ''}>Profile</NavLink>
         </div>
         <div className={s.navigationLink}>
            <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : ''}>Messages</NavLink>
         </div>
         <div className={s.navigationLink}>
            <NavLink to='/users' className={navData => navData.isActive ? s.active : ''}>Users</NavLink>
         </div>
         <div className={s.navigationLink}>
            <NavLink to='/news' className={navData => navData.isActive ? s.active : ''}>News</NavLink>
         </div>
         <div className={s.navigationLink}>
            <NavLink to='/musik' className={navData => navData.isActive ? s.active : ''}>Musik</NavLink>
         </div>
         <div className={s.navigationLink}>
            <NavLink to='/settings' className={navData => navData.isActive ? s.active : ''}>Settings</NavLink>
         </div>
         <div className={s.freinds}>
            <h3>Freinds</h3>
            <FreindContainer />
         </div>
      </nav>
   );
}
export default Nav