import React from 'react';
import Profile, { ProfilePropsType } from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reduser'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';


type MapStatePropsType = {
   profile:ProfileType|null
   status: string
   authorizedUserid:number|null
   isAuth:boolean
}

class ProfileContainer extends React.Component<ProfilePropsType> {

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

let mapStateToProps = (state:AppStateType):MapStatePropsType => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserid: state.auth.userId,
   isAuth: state.auth.isAuth
})


export default compose<React.Component>(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   // withAuthRedirect
)(ProfileContainer)