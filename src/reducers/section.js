import {
  MOVE_SECTION,
  SET_MARGIN,
} from '../constants';

import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  collection: {
    skills: false,
    projects: false,
  },
  margin: 0,
});

function sectionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case MOVE_SECTION:
    return state.merge(fromJS({
      collection: action.payload.collection,
      margin: action.payload.margin,
    }));

  case SET_MARGIN:
    return state.merge(fromJS({
      margin: action.payload,
    }));

  default:
    return state;
  }
}

export default sectionReducer;
