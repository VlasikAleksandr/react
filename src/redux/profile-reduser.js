
import like from '../assets/imeges/like.png'
import images from '../assets/imeges/images.jpg'
import { profileAPI, usersAPI } from '../../src/api/api';

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

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
   ],
   profile: null,
   status: ''
}

const profileReduser = (state = initialState, action) => {
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

export let addPostActionCreator = (newPostText) => ({
   type: ADD_POST, newPostText
})

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export let setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => async (dispatch) => {
   let response = await usersAPI.getProfile(userId)
   dispatch(setUserProfile(response.data))
      
}

export const getStatus = (userId) => async(dispatch) => {
   let response = await profileAPI.getStatus(userId)
   dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async(dispatch) => {
   let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
      }
}


export default profileReduser