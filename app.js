let input = document.querySelector("input");
let btns = document.querySelectorAll(".btns button");

let result = "";

let btnArray = Array.from(btns);

btnArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      result = eval(result);
      input.value = result;
    } else if (e.target.innerHTML == "AC") {
      result = "";
      input.value = result;
    } else if (e.target.innerHTML == "DEL") {
      result = result.substring(0, result.length - 1);
      input.value = result;
    } else {
      result += e.target.innerHTML;
      input.value = result;
    }
  });
});
