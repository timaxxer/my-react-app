import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import activeUser from './activeUser'
export default combineReducers({
  routing: routerReducer,
  activeUser
})