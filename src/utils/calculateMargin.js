export default function calculateMargin(
  scrollToTop,
  headerHeight,
  heights
) {
  const collection = {};
  let margin = headerHeight.value;
  heights.reduce((prev, next, index) => {
    collection[next.section] = scrollToTop > prev.value ? true : false;
    if (index > 0 && collection[next.section] !== collection[prev.section]) {
      margin = prev.value;
    }
    return { section: next.section, value: prev.value + next.value };
  }, headerHeight);
  return { collection, margin };
}
