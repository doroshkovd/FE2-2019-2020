// eslint-disable-next-line no-unused-vars
function populationGrow(current, percent, outer, expect) {
  let result = 0;
  const localPercent = percent / 100;
  let localCurrent = current;
  while (localCurrent <= expect) {
    localCurrent = localCurrent + localCurrent * localPercent + outer;
    result += 1;
  }

  return result;
}
