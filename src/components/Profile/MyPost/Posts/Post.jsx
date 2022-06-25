import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
   return (
      <div className={s.post}>
         <div className={s.logo_post}>
            <img src={props.avatar} />
         </div>
         <div className={s.data_post}>{props.message}</div>
         <div className={s.like}>
            <img src={props.like} />
            {props.likesCount}
         </div>
      </div>
   )
}
export default Post