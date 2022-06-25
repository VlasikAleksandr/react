
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';



class UsersAPIComponent extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
   }

   onPageChanget = (pageNumber) => {
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
            unFollow={this.props.unFollow}
            followingInProgress={this.props.followingInProgress} />
      </>
   }
}

export default UsersAPIComponent