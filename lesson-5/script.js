// num 1
function numTask1(a, b) {
  return a % b;
}

function numTask2(num, option = 1) {
  let result = Math.sqrt(num);

  switch (option) {
    case 1:
      result = Math.round(result);
      break;
    case 2:
      result = result.toFixed(1);
      break;
    case 3:
      result = result.toFixed(2);
      break;
    default:
      result = 'Wrong param';
  }
  return result;
}

// console.log(numTask2(379));
// console.log(numTask2(379, 2));
// console.log(numTask2(379, 3));
// console.log(Math.sqrt(379));

const obj = {
  x: 10,
  y: 20,
  const: 12,
  tut: 'tut.by',
  'tut by': 'http://tut.by',
};

console.log(obj.x);
const field = 'y';
console.log(obj[field]);
console.log(obj['tut by']);

obj.x += obj.y;
console.log(obj.x);

console.log('x' in obj);

// if (obj.u) {
//   console.log('u exist');
// } else {
//   console.log('u doesn\'t exist');
// }

obj.u = 34;

// if (obj.u) {
//   console.log('u exist');
// } else {
//   console.log('u doesn\'t exist');
// }

function createMan(name, sex, age, id) {
  return {
    name,
    sex,
    age,
    id,
  };
}

const men = [];
men.push(createMan('Name1', 'F', '22', 'knd3hdbyhbyude'));
men.push(createMan('Name2', 'F', '262', 'k2ndhdbyhbyude'));
men.push(createMan('Name3', 'F', '52', 'kndh6dbyhbyude'));

// console.log(men);

function getDays() {
  const days = {
    d1: 'Monday',
    d2: 'Вторник',
    d3: 'Среда',
    d4: 'Чт',
    d5: 'Пт',
    d6: 'Сб',
    d7: 'Вс',
  };

  console.log(Object.keys(days));
  console.log(Object.values(days));
  console.log(Object.entries(days));

  // eslint-disable-next-line no-restricted-syntax
  for (const entrie of Object.entries(days)) {
    console.log(`${entrie[0]} -> value: ${entrie[1]}`);
  }


  // for (const key in days) {
  //   console.log(`${key} -> value: ${days[key]}`);
  // }
}

getDays();


const price = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Lorem ipsum 1',
    price: 2280,
  },
  {
    id: 1,
    title: 'Title 1',
    description: 'Lorem ipsum 1',
    price: 200,
  },
  {
    id: 1,
    title: 'Title 1',
    description: 'Lorem ipsum 1',
    price: 700,
  },
  {
    id: 1,
    title: 'Title 1',
    description: 'Lorem ipsum 1',
    price: 500,
  },
];

function getProceSum(arr) {
  let sum = 0;
  for (const item of arr) {
    if (item.price > 500) {
      sum += item.price;
    }
  }

  return sum;
}

console.log(getProceSum(price));
