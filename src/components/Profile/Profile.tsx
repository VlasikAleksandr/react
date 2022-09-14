import React from 'react';
import { ProfileType } from '../../types/types';
import Avatar from './Avatar/Avatar';
import ProfileStatus from './Avatar/ProfileStatus';
import FirstImage from './FirstImage/FirstImage';
import MyPostContainer from './MyPost/MyPostContainer';
import s from './Profile.module.css'

export type ProfilePropsType = {
   profile:ProfileType|null
   status: string
   updateStatus:(status:string)=>void
}


const Profile: React.FC<ProfilePropsType> = (props) => {

   return (
      <div className={s.content}>
         <FirstImage />
         <Avatar/>
         <ProfileStatus status={props.status}
            updeteStatus={props.updateStatus} />
         <MyPostContainer />
      </div>
   );
}
export default Profile