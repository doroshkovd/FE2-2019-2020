const obj1 = {
  x: 10,
  y: 10,
};

const obj3 = { z: 34 };

// const obj2 = JSON.parse(JSON.stringify(obj1));

// const obj2 = { x: 2, ...obj1, ...obj3 };

const obj2 = Object.assign({}, obj1, obj3);

obj2.x = 45;

console.log(obj1.x);






