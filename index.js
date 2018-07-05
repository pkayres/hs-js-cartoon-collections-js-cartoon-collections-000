function dwarfRollCall(dwarves) {
  var array = [];
  for (var i = 0; i < dwarves.length; i++){
  array.push(`${i+1}. ${dwarves[i]} `)}
  return array.join("");
}

function summonCaptainPlanet(planeteerCalls){
var calls = [];
var i = 0;
while (i < planeteerCalls.length){
calls.push(`${planeteerCalls[i]}!`)
i++;
}
return calls;
}

function longPlaneteerCalls(words) {
if (words.length <= 4){
return false;
}
else {
return true;
}
}
function findTheCheese (foods) {
var cheese = ["cheddar","gouda","camembert"]
var found =foods.find(function(food){
  return cheese.includes(food);
})

if (found != undefined){
  return found;
}
else{
 return `no cheese!`;
  }
  }
// function findTheCheese (foods) {
// var cheese = ["cheddar","gouda","camembert"]
// if (foods.find(cheese){
// return cheese;
// }
// else{
//   return `no cheese!`;
//   }
// }
