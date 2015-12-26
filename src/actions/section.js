import {
  MOVE_SECTION,
  SET_MARGIN,
} from '../constants';

export function moveSection(collection) {
  return {
    type: MOVE_SECTION,
    payload: collection,
  };
}

export function setMargin(height) {
  return {
    type: SET_MARGIN,
    payload: height,
  };
}
