import { connect } from "react-redux";
import UsersAPIComponent from './UsersAPIComponent';
import {
   follow,
   unfollow,
   setCurrentPage,
   toggeleFollowingProgress,
   requestUsers
} from '../../redux/users-reduser'
import {
   getUsers,
   getPageSize,
   getTotalUsersCount,
   getCurrentPage,
   getIsFetching,
   getFollowingInProgress
} from '../../redux/users-selectors'
import { compose } from "redux";


let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}

export default compose(connect(mapStateToProps, {
   follow,
   unfollow,
   setCurrentPage,
   toggeleFollowingProgress,
   requestUsers
}))(UsersAPIComponent)

