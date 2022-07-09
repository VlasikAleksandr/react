import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/imeges/user.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

let Users = ({currentPage, onPageChanget, totalUsersCount, pageSize, ...props}) => {
   return (
      <div className={s.wrap}>
         <Paginator currentPage={currentPage} onPageChanget={onPageChanget}
                    totalUsersCount={totalUsersCount} pageSize={pageSize} />
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <NavLink to={'/profile'}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} />
                     </NavLink>
                  </div>
                  <div>
                     {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                           props.unfollow(u.id)
                        }}>
                           Unfollow
                        </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                           props.follow(u.id)
                        }}>
                           Follow
                        </button>}
                  </div>
               </span>
               <span>
                  <span>
                     <div>
                        {u.name}
                     </div>
                     <div>
                        {u.status}
                     </div>
                  </span>
                  <span>
                     <div>
                        {'u.location.city'}
                     </div>
                     <div>
                        {'u.location.country'}
                     </div>
                  </span>
               </span>
            </div>)
         }
      </div>
   )
}


export default Users
