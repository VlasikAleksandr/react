import userPhoto from '../../assets/imeges/user.png'
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';


const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
       <div className={s.wrap}>
            <span>
                <div>
                    <NavLink to={'/profile'}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                              unfollow(user.id)
                         }}>
                            Unfollow
                     </button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                              follow(user.id)
                         }}>
                            Follow
                      </button>}
                   </div>
                </span>
                <span>
                   <span>
                      <div>
                         {user.name}
                      </div>
                      <div>
                         {user.status}
                      </div>
                   </span>
                   <span>
                      <div>
                         {'user.location.city'}
                      </div>
                      <div>
                         {'user.location.country'}
                      </div>
                   </span>
                </span>
             </div>
             )}
    
 
 
 
 export default User
 