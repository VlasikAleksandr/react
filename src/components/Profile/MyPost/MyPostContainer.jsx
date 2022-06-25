import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator} from './../../../redux/profile-reduser'
import MyPost from './MyPost';


let mapStateToProps = (store) => {
   
   return {
      posts: store.profilePage.posts,
      newPostText: store.profilePage.newPostText
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (newPostText) => {
         dispatch(addPostActionCreator(newPostText))
      }
   }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer