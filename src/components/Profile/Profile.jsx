import React from 'react';
import Avatar from './Avatar/Avatar';
import ProfileStatus from './Avatar/ProfileStatus';
import FirstImage from './FirstImage/FirstImage';
import MyPostContainer from './MyPost/MyPostContainer';
import s from './Profile.module.css'

const Profile = (props) => {

   return (
      <div className={s.content}>
         <FirstImage />
         <Avatar props={props.profile} />
         <ProfileStatus status={props.status}
            updateStatus={props.updateStatus} />
         <MyPostContainer />
      </div>
   );
}
export default Profile