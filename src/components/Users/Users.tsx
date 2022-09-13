import React from 'react';
import { UsersType } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


export type PropsType = {
   currentPage:number
   onPageChanget: (pageNumber:number)=>void
   totalUsersCount:number
   pageSize:number 
   users: Array<UsersType> 
   followingInProgress:Array<number>
   unfollow:(userId:number)=>void
   follow:(userId:number)=>void
}

let Users: React.FC<PropsType> = ({currentPage, onPageChanget, totalUsersCount, pageSize, users, ...props}) => {
   return (
      <div>
         <Paginator currentPage={currentPage} onPageChanget={onPageChanget}
                    totalUsersCount={totalUsersCount} pageSize={pageSize} />
         
            {users.map(u => <User user={u}
                                  followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow}
                                  follow={props.follow}
                                  key={u.id}/>)}
      </div>)}


export default Users
