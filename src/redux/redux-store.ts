import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import profileReduser from './profile-reduser';
import dialogsReduser from './dialods-reduser';
import freindsReduser from './freinds-reduser';
import usersReducer from './users-reduser';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
   profilePage: profileReduser,
   dialogsPage: dialogsReduser,
   freinds: freindsReduser,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,

})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store




