function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(heightCm) || heightCm <= 0) {
    document.getElementById("result").textContent = "Please enter valid numbers.";
    return;
  }

  const height = heightCm / 100; // Convert cm to meters
  const bmi = weight / (height * height);
  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Normal weight";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  document.getElementById("result").textContent = `Your BMI is ${bmi.toFixed(2)} (${status})`;
}
