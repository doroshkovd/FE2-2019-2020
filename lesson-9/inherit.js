// Prototype inherit
function Animal(name) {
  this.name = name;
  this.run = () => 20;
}

Animal.prototype.run = true;

function Tiger(name) {
  this.age = 12;
}

Tiger.prototype = Object.create(Animal.prototype);

Tiger.prototype.constructor = Tiger;

const tiger = new Tiger('name');

console.log(tiger.run);


// functional inherit
// function Animal(name) {
//   this.name = name;
//   this.run = () => 20;
// }
//
//
// function Tiger(name) {
//   Animal.call(this, name);
//   this.age = 12;
// }
// const tiger = new Tiger('Dfcz');
// console.dir(tiger);
