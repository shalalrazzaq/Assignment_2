class Automobile {
    constructor(name,model,color,typeA,typeB) {
      this.name = name;
      this.model = model;
      this.color = color;
      this.typeA = Automatic;
      this.typeB = Manual;
    }
    present() {
      return 'I have a ' + this.name;
    }
    start(){
        console.log("Car is ready for Drive");
    }
    openDoor(){
        console.log("door is open");
    }
  }
  
  class Car extends Automobile {
    constructor(name, model, brand) {
      super(name, model);
      this.model = model;
      this.brand = brand;
    }
    show() {
      return this.present() + ', it is a ' + this.brand;
    }
  }
  class Truck extends Automobile {
    constructor(name, model, brand) {
      super(name, model);
      this.model = model;
      this.brand = brand;
    }
    show() {
      return this.present() + ', it is a ' + this.brand;
    }
  }