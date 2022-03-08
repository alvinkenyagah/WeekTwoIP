//Drop down year selector
var min = 1900,
  max = 2022,
  select = document.getElementById("year");

for (var i = min; i <= max; i++) {
  var opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}
//Drop down day selector
var min = 1,
  max = 31,
  select = document.getElementById("day");

for (var i = min; i <= max; i++) {
  var opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}

//Akan array for male and female
let maleAkanNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

let femaleAkanNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];
