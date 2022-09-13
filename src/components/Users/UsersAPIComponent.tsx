
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { UsersType } from '../../types/types';


export type MapStatePropsType = {
   currentPage:number 
   pageSize:number
   isFetching:boolean
   totalUsersCount:number
   followingInProgress:Array<number>
   users:Array<UsersType>
}
export type MapDispatchPropsType = {
   unfollow:(userId:number)=>void
   follow:(userId:number)=>void
   requestUsers:(currentPage:number,pageSize:number)=>void
}



 export type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersAPIComponent extends React.Component<PropsType> {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
   }

   onPageChanget = (pageNumber:number) => {
      this.props.requestUsers(pageNumber, this.props.pageSize)
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanget={this.onPageChanget}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress} />
      </>
   }
}

export default UsersAPIComponent