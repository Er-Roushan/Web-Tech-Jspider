document.getElementById("container").style.cssText =
  "width:300px; height:400px; background-color: tomato; margin:0 auto; ";

document.querySelector("button").style.cssText =
  "width: 100px; margin-left:46%;";

function myFunc() {
  document.getElementById("container").style.backgroundColor = "lightgreen";
}

function myFunc2() {
  document.getElementById("container").innerText = "Text after double click.";
}

function upperCase() {
  let x = document.getElementById("inp");
  x.value = x.value.toUpperCase();
}

document.getElementById("dblclk").addEventListener("click", () => {
  document.getElementById("dblclk").style.cssText =
    "border:2px solid red; background-color:blue;";
});
