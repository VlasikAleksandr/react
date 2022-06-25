import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
const Header = (props) => {
   return (
      <header className={s.header}>
         <img src="https://avatars.mds.yandex.net/i?id=2eec6a25b9070eb62298e67cba1614f2-5601751-images-thumbs&n=13&exp=1" />
         <div className={s.loginBlock}>
            {props.isAuth
               ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
               : <NavLink to='/login'>Login</NavLink>}
         </div>
      </header>
   );
}
export default Header