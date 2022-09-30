// Class declaration
class Vehicle { 
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
     } 

     information(){
        console.log(`Make: ${this.make} \nModel: ${this.model} \nYear: ${this.year}`);
     }
} 

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }
    information(){
        super.information();
        console.log(`Doors: ${this.doors}`);
    }
}

var veh = new Car("Mercedez", "AMG 500", 2020, 4);
veh.information();