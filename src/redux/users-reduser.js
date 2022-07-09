import { usersAPI } from '../../src/api/api';
import { updateObjectInArray } from '../utils/objecr-helper/jbject-helper';




const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CUORENT_PAGE = 'SET-CUORENT-PAGE'
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRES = 'TOGGLE-IS-FOLLOWING-PROGRES'



let initialState = {
   users: [],
   pageSize: 100,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
}


const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', {follow: true})
         }
      case UNFOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', {follow: false})
         }
      case SET_USERS:
         return {
            ...state,
            users: action.users
         }
      case SET_CUORENT_PAGE:
         return { ...state, currentPage: action.currentPage }
      case SET_TOTAL_USER_COUNT:
         return { ...state, totalUsersCount: action.totalUsersCount }
      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }
      case TOGGLE_IS_FOLLOWING_PROGRES:
         return {
            ...state,
            followingInProgress: action.followingInProgress
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
         }
      default:
         return state;
   }
}



export const acceptFollow = (userId) => ({ type: FOLLOW, userId })
export const acceptUnFollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CUORENT_PAGE, currentPage })
export const setTotalUserCount = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggeleFollowingProgress = (followingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRES, followingInProgress, userId })


export const requestUsers = (currentPage, pageSize) => {
   return async(dispatch) => {
      dispatch(toggleIsFetching(true))
      dispatch(setCurrentPage(currentPage))
      let data= await usersAPI.getUsers(currentPage, pageSize)
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUserCount(data.totalCount))
   }
}

const followUnfollowFlow = async(dispatch, userId, apiMephod, actionCreator)=>{
   dispatch(toggeleFollowingProgress(true, userId))
   let response = await apiMephod(userId)
   if (response.data.resultCode == 0) {
         dispatch(actionCreator(userId))
   }
   dispatch(toggeleFollowingProgress(false, userId));
}

export const follow = (userId) => {
   return async(dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), acceptFollow)
   }
}

export const unfollow = (userId) => {
   return async(dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), acceptUnFollow)
   }
}

export default usersReducer