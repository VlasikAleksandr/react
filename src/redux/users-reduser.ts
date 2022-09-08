import { UsersType } from '../types/types';
import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/objecr-helper/jbject-helper';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CUORENT_PAGE = 'SET-CUORENT-PAGE'
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRES = 'TOGGLE-IS-FOLLOWING-PROGRES'


let initialState = {
   users: [] as Array<UsersType>,
   pageSize: 100,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [] as Array<number> // array usersId
}

type InitialStateType = typeof initialState


const usersReducer = (state = initialState, action:any):InitialStateType => {
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


type AcceptFollowType = {
   type: typeof FOLLOW 
   userId:number
}
export const acceptFollow = (userId:number):AcceptFollowType => ({ type: FOLLOW, userId })

type AcceptUnFollowType = {
   type: typeof UNFOLLOW 
   userId:number
}
export const acceptUnFollow = (userId:number):AcceptUnFollowType => ({ type: UNFOLLOW, userId })

type SetUsersType = {
   type: typeof SET_USERS
   users:Array<UsersType>
}
export const setUsers = (users: Array<UsersType>):SetUsersType => ({ type: SET_USERS, users })

type SetCurrentPageType = {
   type: typeof SET_CUORENT_PAGE
   currentPage: number
}
export const setCurrentPage = (currentPage:number):SetCurrentPageType => ({ type: SET_CUORENT_PAGE, currentPage })

type SetTotalUserCountType = {
   type: typeof SET_TOTAL_USER_COUNT
   totalUsersCount: number
}
export const setTotalUserCount = (totalUsersCount:number):SetTotalUserCountType => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })

type ToggleIsFetchingType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type ToggeleFollowingProgressType = {
   type: typeof TOGGLE_IS_FOLLOWING_PROGRES
   isFetching: boolean
   userId: number
}
export const toggeleFollowingProgress = (isFetching:boolean, userId:number):ToggeleFollowingProgressType => 
({ type: TOGGLE_IS_FOLLOWING_PROGRES, isFetching, userId })


export const requestUsers = (currentPage:number, pageSize:number) => {
   return async(dispatch:any) => {
      dispatch(toggleIsFetching(true))
      dispatch(setCurrentPage(currentPage))
      let data= await usersAPI.getUsers(currentPage, pageSize)
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUserCount(data.totalCount))
   }
}

const followUnfollowFlow = async(dispatch:any, userId:number, apiMephod:any, actionCreator:any)=>{
   dispatch(toggeleFollowingProgress(true, userId))
   let response = await apiMephod(userId)
   if (response.data.resultCode == 0) {
         dispatch(actionCreator(userId))
   }
   dispatch(toggeleFollowingProgress(false, userId));
}

export const follow = (userId:number) => {
   return async(dispatch:any) => {
      followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), acceptFollow)
   }
}

export const unfollow = (userId:number) => {
   return async(dispatch:any) => {
      followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), acceptUnFollow)
   }
}

export default usersReducer