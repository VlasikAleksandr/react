
import like from '../assets/imeges/like.png'
import images from '../assets/imeges/images.jpg'
import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

type PostsType = {
   id:number
   message:string
   like:any
   likesCount:number
   avatar:any
}

type ContactsType ={
   github:string
   vk:string
   facebook:string
   instagram:string
   twitter:string
   website:string
   youtube:string
   mainLink:string   
}
type PhotosType ={
   small:string|null
   large:string|null
}

type ProfileType ={
   userId:number
   lookingForAJob:boolean
   lookingForAJobDescription:string
   fullName:string
   contacts:ContactsType
   photos:PhotosType

}

let initialState = {
   posts: [
      {
         id: 1,
         message: 'Hi how are you',
         like: like,
         likesCount: 12,
         avatar: images
      },
      {
         id: 2,
         message: 'waht are you doing',
         like: like,
         likesCount: 11,
         avatar: images
      },
      {
         id: 2,
         message: 'Hello',
         like: like,
         likesCount: 11,
         avatar: images
      },
      {
         id: 2,
         message: 'I am stading programming',
         like: like,
         likesCount: 11,
         avatar: images
      }
   ] as Array<PostsType>,
   profile: null as ProfileType|null,
   status: '',
   newPostText: ''
}
export type InitialStateType = typeof initialState

const profileReduser = (state = initialState, action:any): InitialStateType => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: action.newPostText,
            like: like,
            likesCount: 21,
            avatar: images
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         }
      }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      default:
         return state;
   }
}

type AddPostActionCreatorType = {
   type : typeof ADD_POST
   newPostText: string
}
type SetUserProfileType= {
   type : typeof SET_USER_PROFILE
   profile: ProfileType
}
type SetStatusType = {
   type : typeof SET_STATUS
   status: string
}

export let addPostActionCreator = (newPostText:string): AddPostActionCreatorType => ({type: ADD_POST, newPostText})
export let setUserProfile = (profile: ProfileType):SetUserProfileType => ({ type: SET_USER_PROFILE, profile })
export let setStatus = (status:string):SetStatusType => ({ type: SET_STATUS, status })

export const getUserProfile = (userId:number) => async (dispatch:any) => {
   let response = await usersAPI.getProfile(userId)
   dispatch(setUserProfile(response.data))
      
}

export const getStatus = (userId:number) => async(dispatch:any) => {
   let response = await profileAPI.getStatus(userId)
   dispatch(setStatus(response.data))
}
export const updateStatus = (status:string) => async(dispatch:any) => {
   let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
      }
}


export default profileReduser