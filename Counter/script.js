const decrement = document.querySelector(".Decrease");
const reset = document.querySelector(".Reset");
const increment = document.querySelector(".Increase");
const countlabel = document.querySelector("#count-label");

let count = 0;

increment.onclick = () => {
  count += 1;
  countlabel.textContent = count;
};

reset.onclick = () => {
  count = 0;
  countlabel.textContent = count;
};

decrement.onclick = () => {
  count -= 1;
  countlabel.textContent = count;
};
