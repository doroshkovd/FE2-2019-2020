export class Car {
  constructor(model) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }
}

export class BMW extends Car {
  constructor(model, color) {
   super(model);
    console.log(super.getModel());
   this.color = color;
  }
}