/**
 * Classes - blueprint to create an object with some fields (values) and methods (functions) to represents a 'thing'
 * public - This method can be called anywhere, anytime (default is public)
 * private - This method can only be called by other method in the same class
 * protected - This method can be called by other method in the same class or by other method in the child classes
 */

class Vehicle {
  // public color: string
  // constructor(color: string){
  //   this.color = color
  // }
  // below constructor is equivalent to above code

  constructor(public color: string) {}

  public startEngine() {
    console.log("start the engine");
  }

  protected honk(): void {
    console.log("Pooo Poooo...");
  }
}
console.log("========= vehicle ============");
const vehicle = new Vehicle("red");

// vehicle.honk(); //error
console.log(vehicle.color);
vehicle.startEngine();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("Long drive par chal...");
  }

  startDriving(): void {
    console.log("number of wheels:", this.wheels);
    console.log("color is:", this.color);
    this.startEngine();
    this.drive();
    this.honk();
  }
}

console.log("========= car ============");
const car = new Car(4, "orange");

// car.drive(); // error
car.startEngine();
car.startDriving();
