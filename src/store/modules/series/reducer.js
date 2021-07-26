import { SET_SERIES } from './action';
import seriesJson from '../../../../series.json';

const INITIAL_STATE = seriesJson;

export default function series(state = null, action) {

  switch (action.type) {
    case SET_SERIES:
      return action.series;
    default:
      return state;

  }
}