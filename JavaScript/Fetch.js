const apiURL = "https://api.github.com/users";

const prom = fetch(apiURL);
// console.log(prom); //promise

const data = prom
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((Error) => {
    console.log("Not found");
  });

// console.log(data);

//   console.log(res); //response
