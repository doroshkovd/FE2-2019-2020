// let x = 5;
//
// switch (x) {
//   case 1:
//     console.log('1 branch');
//     break;
//   case 5:
//   case 6:
//     console.log('6 branch');
//     break;
//   case 1:
//     console.log('1 branch');
//     break;
//   default:
//     console.log('No results');
// }
//
// function getNumWord(num, word1, word2, word5) {
//   let dd = num % 100;
//
//   if ((dd >= 11) && (dd <= 19)) {
//     return word5;
//   }
//
//   let oneDigit = num % 10;
//
//   if (oneDigit === 1) {
//     return word1;
//   }
//
//   if (oneDigit >= 2 && oneDigit <= 4) {
//     return word2;
//   }
//
//   return word5;
// }
//
// function makeTest() {
//   let applesCount = parseInt(prompt('Сколько яблок?'));
//   if (applesCount) {
//     alert('У вас' + applesCount + ' ' + getNumWord(applesCount,
//         'яблоко', 'яблока', 'яблок'));
//   }
// }
//
// makeTest();
// String.prototype.customSubstring = function(firstIndex, lastIndex) {
//   let result = '';
//
//   for (let i = firstIndex; i <= lastIndex; i++) {
//     result += this[i];
//   }
//
//   return result;
// };
// function substring(str, firstIndex, lastIndex) {
//   let result = '';
//
//   for (let i = firstIndex; i <= lastIndex; i++) {
//     result += str[i];
//   }
//
//   return result;
// };
//
// console.log(substring('123456', 1, 3));
// function getSum(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n--;
//   }
//
//   return sum;
// }
//
// function getSumR(n) {
//   if (n === 0) {
//     return 0;
//   }
//
//   return n + getSumR(n - 1)
// }
//
// console.log(getSum(3));
// console.log(getSumR(3));
// function getFibonachi(n) {
//   if (n <= 2) {
//     return 1;
//   }
//   return getFibonachi(n-1) + getFibonachi(n - 2);
// }
//
// function getFibonachiC(n) {
//   let result = 1, index = 3, prevValue = 1;
//
//   while (index <= n) {
//     result += prevValue;
//     prevValue = result - prevValue;
//     index++;
//   }
//
//   return result;
// }
//
// function isPolindrom1(str) {
//   return str === str.split('').reverse().join('');
// }
//
// function isPolindrom2(str) {
//   let result = '';
//
//   for(let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//
//   return result === str;
// }
//
// console.log(isPolindrom2('1301'));
// console.log(isPolindrom2('abba'));

function getMultiplyTable() {
  const body = document.body;
  const table = document.createElement('table');
  let tr, td, tdInner = '';

  table.style.width = '100%';
  table.setAttribute('border', '1');

  for (let i = 1; i <= 10; i++) {
    if (i === 1 || i === 6) {
      tr = document.createElement('tr');
    }
    td = document.createElement('td');
    for (let j = 1; j <= 10; j++) {
      tdInner += `<div style="padding: 5px">${i} * ${j} = ${i * j}</div>`;
    }
    td.innerHTML = tdInner;
    tr.append(td);
    if (i === 5 || i === 10) {
      table.append(tr);
    }
  }

  body.append(table);
}

getMultiplyTable();
