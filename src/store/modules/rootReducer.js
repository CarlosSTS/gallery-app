import { combineReducers } from "redux";

import user from './user/reducer'
import serieForm from './serieForm/reducer'
import series from './series/reducer'

export default combineReducers({
  user,
  serieForm,
  series
})