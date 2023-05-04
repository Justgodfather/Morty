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

let app = document.querySelector("#app");
let table = document.createElement("table");
table.style.width = "600px";
table.style.border = "2px solid black";
// table.style.height = '500px';
let tr = document.createElement("tr");

let td = document.createElement("th");
td.style.border = "1px solid black";
td.innerText = "Country";

let td1 = document.createElement("th");

td1.style.border = "1px solid black";
td1.innerText = "Flags";

let td2 = document.createElement("th");
td2.style.border = "1px solid black";
td2.innerText = "Capital";

let td3 = document.createElement("th");
td3.style.border = "1px solid black";
td3.innerText = "Region";

let td4 = document.createElement("th");
td4.style.border = "1px solid black";
td4.innerText = "translations";

tr.append(td, td1, td2, td3, td4);
table.append(tr);

app.append(table);

function getCountry() {
  fetch("https://restcountries.com/v3.1/all")
    .then((result) => result.json())
    .then((data) => {
      data.forEach((item) => {
        let lang = Object.values(item.languages)[0];
        table.innerHTML += `<tr>
          <td style="border: 1px solid black">${item.name.official}</td>
          <td style="border: 1px solid black; text-align: center"><img src= "${item.flags.svg}" alt="ICON" style="width: 40px"></td>
          
          <td style="border: 1px solid black">${item.capital}</td>
          <td style="border: 1px solid black">${item.region}</td>
          <td style="border: 1px solid black">${lang}</td>
        </tr>`;
      });
    });
}

getCountry();
