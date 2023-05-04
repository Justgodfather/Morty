//  Promise может находится в трех состояниях

//  pending = начальное состояние, ожмдание, не исполнен.
//  fulfilled = операция завершена успешно
//  rejected = операция завершена с ошибкой

// const myFirstPromise = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a === 3) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// });
// console.log(myFirstPromise);

// myFirstPromise
//   .then((message) => {
//     console.log("This is in the then" + message);
//   })
//   .catch((message) => {
//     console.log("This is in the catch" + message);
//   })
//   .finally(() => {
//     console.log("I am finally, i work in BOTH cases");
//   });

// ! fetch
// let users = document.querySelector(".users");
// fetch("https://reqres.in/api/users?page=2").then((data) => {
//   data.json().then((res) => {
//     res.data.forEach((item) => {
//       let user = document.createElement("h2");
//       user.innerHTML = item.first_name;
//       users.append(user);
//     });
//   });
// });

// let pokemons = document.querySelector(".pokemons");
// fetch("https://pokeapi.co/api/v2/pokemon/")
//   .then((data) => data.json())
//   .then((res) => {
//     res.results.forEach((poke) => {
//       let pokemon = document.createElement("div");
//       pokemon.classList.add("pokemon");
//       pokemon.innerHTML = ` <h3>${poke.name}</h3>`;
//       pokemons.append(pokemon);
//       fetch(poke.url)
//         .then((resp) => resp.json())
//         .then((result) => {
//           let img = document.createElement("img");
//           img.setAttribute("src", result.sprites.front_default);
//           pokemon.append(img);
//         });
//     });
//   });

function start() {
  let rikkiMorty = document.querySelector(".rikki");
  fetch("https://rickandmortyapi.com/api/character")
    .then((data) => data.json())
    .then((res) => {
      res.results.forEach((rik) => {
        console.log(rik);
        let rikkiDiv = document.createElement("div");
        rikkiDiv.classList.add("rikki2");
        rikkiDiv.innerHTML = `
      <img src="${rik.image}" class"img" />
        <h2>${rik.name}</h2>
        <h3>ID: ${rik.id}</h3>
        <h4>ID: ${rik.status}</h4>
      `;

        rikkiMorty.append(rikkiDiv);
      });
    });
}
let btn = document.querySelector("#submit");

btn.onclick = function () {
  start();
  btn.style.display = "none";
};
