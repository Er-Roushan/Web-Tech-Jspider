//Array destructuring

let arr = [10, 20, 30, 40, true, [67, 89]];
console.log(arr[5][0]);

let [a, b, c, d, e, [f, g]] = [...arr];
console.log(f);

let arr2 = ["sonu", "ki", "precious", "Notebook"];
let [y, z, ...x] = [...arr2];
console.log(z);
console.log(x);

//object destructuring

let emp = {
  empName: "Roushan Kumar",
  eid: 1,
  salary: 25000,
  age: 22,
  mgr: 4044,
  designation: "If you are seeing this code please hire me.",
  department: "Available for Development",
  skills: {
    technicalSkills: {
      forntend: ["html", "css", "js"],
      backend: ["PHP", "Spring", "springBoot"],
    },
  },
};

let { empName, eid, salary, age, mgr, designation, department } = { ...emp };
console.log(empName);

let {
  skills: {
    technicalSkills: {
      forntend: [t, i, v],
    },
  },
} = { ...emp };

console.log(i);

let arr3 = [
  10,
  20,
  {
    TempName: "Sonu",
    skills: [
      {
        TtechnicalSkills: {
          Tforntend: ["HTML", "CSS", "js"],
          TbackEnd: ["node", "Express", "MongoDB"],
          Tcloud: ["AWS", "Azure"],
        },
      },
      {
        Tsoftskills: ["reading", "Gaming"],
      },
    ],
  },
];

// let [aa, bb, { TempName, [{ tfn, tbk, tcloud }, [...rest]]}] = [...arr3];
