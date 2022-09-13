import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import {
   follow, requestUsers, setCurrentPage,
   toggeleFollowingProgress, unfollow
} from '../../redux/users-reduser';
import {
   getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize,
   getTotalUsersCount, getUsers
} from '../../redux/users-selectors';
import UsersAPIComponent, { MapStatePropsType } from './UsersAPIComponent';
import PropsType from './UsersAPIComponent';



let mapStateToProps = (state:AppStateType):MapStatePropsType => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}

export default compose<React.Component<PropsType>>(
   connect(mapStateToProps, {
         follow,
         unfollow,
         setCurrentPage,
         toggeleFollowingProgress,
         requestUsers
}))(UsersAPIComponent)

