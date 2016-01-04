export function getSections( offset, viewport, propList, ...heights) {
  const collection = {};
  const size = propList.length;
  heights.reduce((previous, current, index) => {
    if (index < size) {
      let bigger = 0;
      if (current > viewport) {
        bigger = current - viewport;
        collection[propList[index]] = (offset > previous + bigger) ?
          bigger : false;
      } else {
        collection[propList[index]] = (offset > previous) ?
          true : false;
      }
    }
    return previous + current;
  }, 0);

  return collection;
}


export function findDifference(prevSections, nextSections) {
  return prevSections.reduce((prev, next, index) => {
    if (next !== nextSections[index]) {
      return true;
    }
    return prev;
  }, false);
}
