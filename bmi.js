document.addEventListener('DOMContentLoaded', (event) => {
document.getElementById("computeButton").addEventListener("click", function() {
    let heightIn = document.getElementById("height").value;
    let weightLbs = document.getElementById("weight").value;

    let heightCm = (heightIn * 2.54); //converting height in inches to centimenters
    let heightM = (heightCm * 0.01); //converting centimeters to meters
    let weightKgs = (weightLbs / 2.2046); //converting lbs to kg

    let bmi = (weightKgs) / (heightM**2) //output

     if(bmi) {
       document.getElementById("bmiOutput").value = bmi.toFixed(2);
     } else {
       document.getElementById("bmiOutput").value = "N/A";
   }
  })
});