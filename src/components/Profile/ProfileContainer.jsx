import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reduser'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component {

   componentDidMount() {
      // let userId = this.props.match.params.userId
      // if (!userId) { userId = 12 }
      // getUserProfile(userId)
      // this.props.getStatus(userId)

   }

   render() {
      return (
         <div>
            <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus} />
         </div>
      );
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserid: state.auth.userId,
   isAuth: state.auth.isAuth
})


export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   // withAuthRedirect
)(ProfileContainer)