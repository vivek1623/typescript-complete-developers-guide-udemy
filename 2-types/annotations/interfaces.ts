// interface is used to define a new type like string, number etc
// property define in Vehicle interface are required

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

const swift = {
  name: "swift desire",
  year: 2019,
  broken: false,
  summary(): string {
    return `${this.name} is one of the top selling car of maruti`;
  },
};

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  brand: "Honda",
  price: 1000000,
  summary(): string {
    return `${this.name} is one of the top selling car of honda`;
  },
};

const newCivic = {
  name: "civic",
  year: 2020,
  brand: "Honda",
  summary(): string {
    return `${this.name} is one of the top selling car of `;
  },
};

printVehicle(swift); //correct
printVehicle(oldCivic); //correct
// printVehicle(newCivic); //error bz broken property is missing
