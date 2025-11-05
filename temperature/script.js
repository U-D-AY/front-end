const btn = document.getElementById("btn");
const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("tofahrenheit");
const toCelsius = document.getElementById("tocelsius");
const result = document.querySelector(".result");

let temp;
const degree = "\u00B0";

btn.addEventListener("click", () => {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    console.log(temp);
    result.textContent = `${temp.toFixed(1)}${degree}C`;
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    console.log(temp);
    result.textContent = `${temp.toFixed(1)}${degree}C`;
  } else {
    result.textContent = "Select a unit";
  }
});
