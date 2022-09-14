import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator} from '../../../redux/profile-reduser'
import { AppStateType } from '../../../redux/redux-store';
import MyPost from './MyPost';
import { PostsType } from '../../../types/types';


export type MapStatePropsType = {
   posts:Array<PostsType>
   newPostText:string
   
}
export type MapDispatchPropsType = {
   addPost:(newPostText:string)=>void
}

let mapStateToProps = (store:AppStateType):MapStatePropsType => {
   
   return {
      posts: store.profilePage.posts,
      newPostText: store.profilePage.newPostText,
   }
}
let mapDispatchToProps = (dispatch:any):MapDispatchPropsType => {
   return {
      addPost: (newPostText:string) => {
         dispatch(addPostActionCreator(newPostText))
      }
   }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer