import { applyMiddleware, combineReducers, createStore } from 'redux'
import contactsReducer from "./contactsReducer"
import teachersReducer from "./teachersReducer"
import authReducer from "./authReducer"
import profileReducer from './profileReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({teachersReducer, contactsReducer, authReducer, profileReducer})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store