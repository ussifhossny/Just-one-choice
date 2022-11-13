let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");
let submitBtn = document.getElementById("submitBtn");
let inputdiv = document.querySelector(".inputdiv");
let inputs = document.createElement("h2");
let options = [];

addBtn.addEventListener("click", () => {
  let newOption = document.createElement("INPUT");
  newOption.setAttribute("value", "");
  newOption.setAttribute("placeholder", "What Is In Your Mind :)");
  newOption.classList.add("options");
  inputdiv.appendChild(newOption);
});

deleteBtn.addEventListener("click", () => {
  let inputdiv = document.querySelector(".inputdiv");
  if (inputdiv.children.length === 2) {
    window.alert("Sorry You Can't Remove the last 2 Options");
    return false;
  }
  inputdiv.removeChild(inputdiv.lastChild);
});

submitBtn.addEventListener("click", () => {
  let form = document.querySelector(".form");
  let lastPage = document.querySelector(".lastPage");
  let inputdiv = document.querySelector(".inputdiv");
  for (let i = 0; i < inputdiv.children.length; i++) {
    if (inputdiv.children[i].value === "") {
      window.alert("Sorry this Can't be Empty");
      return false;
    }
    options.push(inputdiv.children[i].value);
  }
  let randomValue = Math.ceil(Math.random() * options.length);
  let finalResult = options[randomValue - 1];
  finalResult = `' ${finalResult} '`;
  form.classList.add("hide");
  lastPage.classList.remove("hide");
  // let inputs = document.createElement("h2");
  inputs.innerHTML = finalResult;

  window.setTimeout(() => {
    let msg = document.getElementById("pw");
    msg.innerHTML = "Loading...";
  }, 3000);
  let congrats = document.createElement("h1");
  window.setTimeout(() => {
    lastPage.classList.add("hide");
    let result = document.querySelector(".result");
    congrats.innerHTML = "We had Found the Best Choice For You :)";
    result.classList.remove("hide");
    result.append(congrats);
    result.append(inputs);
    homeBtn();
  }, 6000);
  options = [];
});

function homeBtn() {
  // options = [];
  // for (let i = 0; i < inputdiv.children.length; i++) {
  //   inputdiv.children[i].value = "";
  // }
  let result = document.querySelector(".result");
  let backBtn = document.createElement("Button");
  // let form = document.querySelector(".form");
  // let lastPage = document.querySelector(".lastPage");
  backBtn.setAttribute("type", "button");
  backBtn.classList.add("backBtn");
  backBtn.innerHTML = "Home";
  result.append(backBtn);
  backBtn.addEventListener("click", () => {
    console.log("reset")
    window.location.reload();
    // lastPage.classList.add("hide");
    // result.classList.add("hide");
    // form.classList.remove("hide");
    // for (let i = 0; i < result.children.length; i++) {
    //   result.children[i].remove();
    //   inputs.innerHTML = ""
    //   let msg = document.getElementById("pw");
    // msg.innerHTML = "Please Wait...";
    // }
  });
}
