const apiURL = "https://api.github.com/users";

fetch(apiURL)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      createCard(element);
    })
  )
  .catch((error) => console.log("error"));

const webpage = document.querySelector(".webpage");
function createCard(data) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  card.innerHTML = `<img src="${data.avatar_url}" alt="avtar">
    <p>${data.login}</p>
    <p>${data.id}</p>`;
  webpage.append(card);
}
