import { SET_FIELD } from './action';

const INITIAL_STATE = {
  // id: null,
  title: '',
  gender: '',
  rate: 0,
  img: '',
  description: ''
}

export default function serieForm(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SET_FIELD:
      const newState = { ...state };
      newState[action.field] = action.value
      return newState

    default:
      return state;
  }
}