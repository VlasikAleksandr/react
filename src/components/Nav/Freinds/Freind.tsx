import React, { FC } from 'react';
import { FreindType } from '../../../types/types';
import FreindItem from '../FreindItem/FreindItem';
import s from './Freind.module.css';

export type FreindPropsType = {
   freinds:Array<FreindType>
}

const Freind:FC<FreindPropsType> = ({freinds}) => {
   return (
      <div className={s.items}>
         {freinds.map(freind => <FreindItem id={freind.id} name={freind.name} avatar={freind.avatar}/>)}
      </div>
   )
}

export default Freind