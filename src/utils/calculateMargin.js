export default function calculateMargin(
  scrollToTop,
  propList,
  ...heights
) {
  const collection = {};
  const size = propList.length;
  let margin = heights[0];
  heights.reduce((previous, current, index) => {
    if (scrollToTop > previous) {
      margin = previous + current;
    }
    if (index <= size) {
      collection[propList[index - 1]] = scrollToTop > previous ? true : false;
    }
    return previous + current;
  });

  return { collection, margin };
}
