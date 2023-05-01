let foods = [];

function Food(name, calories) {
  this.name = name;
  this.calories = parseInt(calories);
}

function addFood() {
  let foodname = document.getElementById("food");
  let caloriesInput = document.getElementById("calories");

  let name = foodname.value;
  let calories = caloriesInput.value;

  let food = new Food(name, calories);
  foods.push(food);

  foodname.value = "";
  caloriesInput.value = "";

  console.log(foods);
  let totalCalories = 0;
  for (let i = 0; i < foods.length; i++) {
    totalCalories += foods[i].calories;
  }
  
  let calorieCount = document.getElementById("calorie-count");
  calorieCount.textContent = "Total calories: " + totalCalories;
  }

let add = document.getElementById("add");
add.addEventListener("click", addFood);

