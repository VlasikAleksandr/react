import *as axios from 'axios';



const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   // withCredentials: true,
   // headers:{
   //    'API-KEY':
   // }

})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 20) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`
      ).then(response => {
         return response.data
      });
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
   },
   getProfile(userId) {
      console.warn('Obsoleta method.Please profileAPI object')
      return profileAPI.getProfile(userId)
   }
}

export const profileAPI = {

   getProfile(userId) {
      return instance.get(`profile/12` + userId)
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId)
   },
   updateStatus(status) {
      return instance.put(`status`, { status })
   }
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   },
   login(login, password, rememberMe = false) {
      return instance.post(`auth/login`,
         { login, password, rememberMe })
   },
   logout() {
      return instance.delete(`auth/me`)
   },
}

