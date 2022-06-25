import React from 'react';
// import Preloader from '../../common/Preloader/Preloader';
import s from './Avatar.module.css'
import images from '../../../assets/imeges/images.jpg'


const Avatar = (props) => {

   // if (!props.props) {
   //    return <Preloader />
   // }
   return (
      <div className={s.avatar}>
         <div className={s.logo}>
            <img src={images} />
         </div>
         <div className={s.logo}>
            {/* <img src={props.props.photos.large} /> */}
         </div>
         <div className={s.informatoin}>
            <div className={s.title}>Vlasik S.</div>
            <div className={s.data}>
               <p>Date of Birth: 21 july</p>
               <p>City: Minsk</p>
               <p>Edukation: BSU'11</p>
               <p>Web Site:https//it-kamasutra.com</p>
            </div>
         </div>
      </div>
   )
}
export default Avatar