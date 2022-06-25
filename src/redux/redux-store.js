import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReduser from './profile-reduser';
import dialogsReduser from './dialods-reduser';
import freindsReduser from './freinds-reduser';
import usersReducer from './users-reduser';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   profilePage: profileReduser,
   dialogsPage: dialogsReduser,
   freinds: freindsReduser,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


window.store = store

export default store




