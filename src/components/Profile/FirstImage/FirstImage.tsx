import React, { FC } from 'react';
import s from './FirstImage.module.css'

const FirstImage: FC = (props) => {
   return (
      <div className={s.first_image}>
         <img src="https://avatars.mds.yandex.net/i?id=4eec9a1b34fb8130d33509dadee2ef10-5896834-images-thumbs&n=13&exp=1" />
      </div>
   )
}
export default FirstImage