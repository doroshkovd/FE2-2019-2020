function Car(options) {
  this.doors = options.doors || 4;
  this.state = options.state || 'Some state';
  this.color = options.color || 'Black';
  this.type = 1;
}

function Truck(options) {
  this.doors = options.doors || 6;
  this.state = options.state || 'Some state';
  this.color = options.color || 'Black';
  this.type = 2;
}

function carsFactory(options) {
  if (options.type === 'car') {
    return new Car(options);
  }

  return new Truck(options);
}

const newCar = carsFactory({ type: 'car' });
const newTrack = carsFactory({ type: 'c' });

console.log(newCar.type);
console.log(newTrack.type);
