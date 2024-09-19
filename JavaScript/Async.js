export let fetchData = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  data.forEach((element) => {
    createCard(element);
  });
};

// fetchData();

const webpage = document.querySelector(".webpage");
function createCard(data) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  card.innerHTML = `<img src="${data.avatar_url}" alt="avtar">
    <p>${data.login}</p>
    <p>${data.id}</p>`;
  webpage.append(card);
}

//modueles are use to share the data between multiple files
//if we import any data from any file in a file than that file is known as modeule file or any file which containe related code is known
//module file
