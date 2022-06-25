import React from 'react';
import s from './Freind.module.css';


const Freind = (props) => {
   return (
      <div className={s.items}>
         <div className={s.item}>
            <img src={props.freinds.freind[0].avatar} />
            <p>{props.freinds.freind[0].name}</p>
         </div>
         <div className={s.item}>
            <img src={props.freinds.freind[1].avatar} />
            <p>{props.freinds.freind[1].name}</p>
         </div>
         <div className={s.item}>
            <img src={props.freinds.freind[2].avatar} />
            <p>{props.freinds.freind[2].name}</p>
         </div>
      </div>
   )
}

export default Freind