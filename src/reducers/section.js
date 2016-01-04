import {
  MOVE_SECTION,
} from '../constants';

import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  collection: {
    header: false,
    skill: false,
    project: false,
  },
});

function sectionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case MOVE_SECTION:
    return state.merge(fromJS({
      collection: action.payload,
    }));

  default:
    return state;
  }
}

export default sectionReducer;
