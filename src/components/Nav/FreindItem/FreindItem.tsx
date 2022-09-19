import s from './FreindItem.module.css'
import {FreindType} from '../../../types/types'
import React, { FC } from 'react';




const FreindItem:FC<FreindType> = ({id, name, avatar})=>{

    return (
        <div className={s.item}>
            <img src={avatar}/>
            <p>{name}</p>
        </div>
    )
}



export default FreindItem