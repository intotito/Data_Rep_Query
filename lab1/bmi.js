// Class declaration
class BMI {
   constructor(height, weight){
    this.height = height;
    this.weight = weight;
   }
   calculateBMI(){
    return this.weight / (this.height * this.height);
   } 
}
// A new instance of BMI
var bmi = new BMI(1.78, 63);
console.log(bmi.calculateBMI());
