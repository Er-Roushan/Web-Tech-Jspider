const ul = document.createElement("ul");

// const li = document.createElement("li");
// li.innerText = "Gurugram";
// ul.appendChild(li);

const arr = [
  "Gurugram",
  "Noida",
  "Faridabad",
  "Merrut",
  "Lunknow",
  "Kanpur",
  "Hulasganj",
  "keur",
  "Jahanabad",
  "Sirsa",
];
let li;
arr.forEach((ele, index, arr) => {
  //   console.log(ele);
  li = document.createElement("li");
  li.innerText = ele;
  ul.appendChild(li);
});

document.body.append(ul);

const table = document.createElement("table");
const thead = document.createElement("thead");

const tr = document.createElement("tr");
table.appendChild(thead).appendChild(tr);
const heading = ["Team", "Win", "Loss", "Net RR"];

heading.forEach((ele, index, thead) => {
  let th = document.createElement("th");
  th.innerText = ele;
  tr.appendChild(th);
});

const teamName = [
  "CSK",
  "MI",
  "KKR",
  "LSG",
  "GT",
  "PBKS",
  "DC",
  "RCB",
  "SH",
  "RR",
];

document.body.append(table);
console.log(table);

//complete above task
