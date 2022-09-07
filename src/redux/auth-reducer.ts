
import { stopSubmit } from 'redux-form';
import { isNoSubstitutionTemplateLiteral } from 'typescript';
import { authAPI } from '../api/api';



const SET_USER_DATA = 'auth/SET_USER_DATA'

export type InitialeStateType = {
   userId: number|null
   email: string|null
   login: string|null
   isAuth: boolean
}
let initialeState: InitialeStateType = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
}


const authReducer = (state: InitialeStateType = initialeState, action:any): InitialeStateType => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      default:
         return state
   }

}
type SetAuthUserDataActionType = {
   type: typeof SET_USER_DATA
   data:SetAuthUserDataActionDataType
}
type SetAuthUserDataActionDataType={
   userId:number|null
   email:string|null
   login:string|null
   isAuth:boolean
}

export const setAuthUserData = (userId:number|null, email:string|null, login:string|null, isAuth:boolean):SetAuthUserDataActionType=> (
   {
      type: SET_USER_DATA,
      data: { userId, email, login, isAuth }
   }
)

export const getAuthUserData = () => async (dispatch:any) => {
     let response= await authAPI.me()    
         if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
         }
}

export const login = (email:string, password:string, rememberMe:boolean) => async(dispatch:any) => {
   let response = await authAPI.login(email, password, rememberMe)
         if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
         } else {
            let message = response.data.messages.length > 0
               ? response.data.messages[0]
               : 'Some error'
            dispatch(stopSubmit('login', { _error: 'Common error' }))
         }
}

export const logout = () => async(dispatch:any) => {
   let response= await authAPI.logout()     
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
         }
}

export default authReducer