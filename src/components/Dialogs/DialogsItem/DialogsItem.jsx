import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';


const DialogsItem = (props) => {
   return (
      <div className={s.dialog}>
         <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink >
      </div>
   )
}

export default DialogsItem