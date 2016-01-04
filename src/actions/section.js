import {
  MOVE_SECTION,
} from '../constants';

export function moveSection(collection) {
  return {
    type: MOVE_SECTION,
    payload: collection,
  };
}
