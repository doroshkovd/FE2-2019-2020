// const monthes = [
//   'янв', 'фев', 'мар', 'апр', 'май', 'июнь',
//   'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// function stringTask1(str, isWww = false) {
//   const prefixArray = ['http://', 'https://'];
//
//   if (isWww) {
//     prefixArray.push('www.');
//   }
//   let result = str;
//
//   prefixArray.forEach((item, index) => {
//     if (result.includes(item)) {
//       result = result.substring(prefixArray[index].length);
//     }
//   });
//
//   return result;
// }
//
// console.log(stringTask1('http://www.ya.ru', true));

const d = new Date();
const d2 = new Date();
const d3 = new Date('1990/01/23 23:45');
const d4 = new Date('1990-01-23T20:45:00.000Z');
// console.log(d4.toLocaleString());
// console.log(d3);
// console.log(d4.getDay());

/**
 * Вывести дату в формате ГГГГ-ММ-ДД
 *
 * @returns {string}
 */
function example1() {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

/**
 *
 */
function example2(date) {
  const monthes = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июнь',
    'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'
  ];

  const d = new Date(date);

  d.setMonth(d.getMonth() + 3);

  let monthe = d.getMonth();

  return monthes[monthe];
}

// console.log(example2('1987-05-04'));

// const localD = new Date('2009-06-04');
// const opt = {
//   month: 'long',
//
// };
// console.log(localD.toLocaleDateString('ru-RU', opt));

function example3(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diff = Math.abs(d1 - d2);

  const diffInDays = Math.floor(diff / (1000 * 3600 * 24));

  return diffInDays;
}

console.log(example3('2020-01-01', '2020-01-05'));
