const outer = document.getElementById("outerCon");
outer.addEventListener("click", () => {
  outer.style.backgroundColor = "red";
});

const firstInner = document.getElementById("firstInnerCon");
firstInner.addEventListener("dblclick", () => {
  firstInner.style.backgroundColor = "lightgreen";
});

const secondInner = document.getElementById("secondInnerCon");
secondInner.addEventListener("contextmenu", () => {
  secondInner.style.backgroundColor = "dodgerblue";
});
