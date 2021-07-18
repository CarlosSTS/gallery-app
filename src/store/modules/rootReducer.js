import { combineReducers } from "redux";

import user from './user/reducer'
import serieForm from './serieForm/reducer'

export default combineReducers({
  user,
  serieForm,
})