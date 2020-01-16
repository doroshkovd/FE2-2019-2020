const single = {
  x: 10,
  y: 20,
};

function ServiceConnection(adress) {
  if (ServiceConnection.instance) {
    return ServiceConnection.instance;
  }

  this.adress = adress;
  this.isConnect = () => true;
  this.connect = () => true;

  ServiceConnection.instance = this;
}

const connection1 = new ServiceConnection('1');
const connection2 = new ServiceConnection('2');
const connection3 = new ServiceConnection('3');

console.log(connection1.adress);

console.log(connection2.adress);
console.log(connection3.adress);
