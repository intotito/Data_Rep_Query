/**
 * A class that calculates the Body Mass Index (BMI)
 */
class BMI {
   /**
    * 
    * @param {Number} height - Height of the person
    * @param {Number} weight - Weight of the person
    */
   constructor(height, weight){
    this.height = height;
    this.weight = weight;
   }
   /**
    * 
    * @returns {Number} - BMI of the person calculated as the ration between the weight and square of the height
    */
   calculateBMI(){
    return this.weight / (this.height * this.height);
   } 
}
// A new instance of BMI
var bmi = new BMI(1.78, 63);
console.log(bmi.calculateBMI());
