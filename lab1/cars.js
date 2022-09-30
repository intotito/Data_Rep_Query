/**
 * Base class for Vehicle
 */
class Vehicle { 
    /**
     * 
     * @param {String} make - The Make of Vehicle
     * @param {String} model - The Model of the Vehicle
     * @param {Number} year - The manufacturing year of the Vehicle
     */
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
     } 
     /**
      * Displays the Information about the Vehicle
      */
     information(){
        console.log(`Make: ${this.make} \nModel: ${this.model} \nYear: ${this.year}`);
     }
} 

/**
 * A derived class from Vehicle
 */
class Car extends Vehicle{
    /**
     * 
     * @param {String} make - The Make of the Car 
     * @param {String} model - The Model of the Car
     * @param {Number} year - The manufacturing year of the Car
     * @param {Number} doors - Number of doorsof the car
     */
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }
    /**
     * Overriden method that displays Information about the Car
     */
    information(){
        super.information();
        console.log(`Doors: ${this.doors}`);
    }
}
var veh = new Car("Mercedez", "AMG 500", 2020, 4);
veh.information();