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

// eslint-disable-next-line no-unused-vars
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

// eslint-disable-next-line no-unused-vars
function findShort(str) {
  const arrString = str.split(' ');
  let min = arrString[0].length;
  for (let i = 1; i <= arrString.length - 1; i++) {
    if (arrString[i].length < min && arrString[i].length > 0) {
      min = arrString[i].length;
    }
  }

  return min;
}

// eslint-disable-next-line no-unused-vars
function solution(num) {
  let sum = 0;
  let currentNum = num - 1;
  while (currentNum > 2) {
    if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      sum += currentNum;
    }

    currentNum -= 1;
  }

  return sum;
}

function arrayDiff(arr1, arr2) {
  if (arr2.length === 0 || arr1.length === 0) {
    return arr1;
  }

  const result = [];

  for (let i = 0; i <= arr1.length - 1; i++) {
    let isExist = false;
    for (let j = 0; j <= arr2.length - 1; j++) {
      if (arr1[i] !== arr2[j]) {
        isExist = true;
      }
    }
    if (isExist) {
      result.push(arr1[i]);
      isExist = false;
    }
  }

  return result;
}

// eslint-disable-next-line no-unused-vars
function convertToCamelCase(str) {
  const strCopy = str;
  const replaceSymbols = ['-', '_'];
  let dashBefore = false;
  let result = '';
  for (let i = 0; i <= strCopy.length - 1; i++) {
    if (replaceSymbols.includes(strCopy[i])) {
      dashBefore = true;
    } else {
      result += dashBefore ? strCopy[i].toUpperCase() : strCopy[i];
      dashBefore = false;
    }
  }

  return result;
}

function checkTestForPrompt() {
  const text = prompt('Enter value:');
  const text2 = prompt('Enter value2:');
  const NO_MSG = 'No msg!';

  if (!text) {
    return NO_MSG;
  }

  return text + text2;
}
