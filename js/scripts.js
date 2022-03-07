//Drop down year selector
var min = 1900,
  max = 2100,
  select = document.getElementById("year");

for (var i = min; i <= max; i++) {
  var opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}
var min = 1,
  max = 31,
  select = document.getElementById("day");

for (var i = min; i <= max; i++) {
  var opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}
