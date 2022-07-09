import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/imeges/user.png'
import { NavLink } from 'react-router-dom';
import { follow, unfollow, } from '../../redux/users-reduser'

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div className={s.wrap}>
         {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
               onClick={(e) => { props.onPageChanget(p) }}>{p}</span>
         })}
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