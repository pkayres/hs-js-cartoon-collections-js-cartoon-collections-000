function dwarfRollCall(dwarves){
 var array = [];
 for (var i = 0; i < dwarves.length;i++){
  array.push(`${i+1}. ${dwarves[i]} `)}
  return array.join("");
}
function summonCaptainPlanet(items){
  var calls = [];
  for (var i = 0; i < items.length; i++){
    calls.push(`${items.toUpperCase}!`)}
    return calls;
}
function longPlaneteerCalls(hello){
  if (hello.length < 4){
    return false;
  }
  else {
  return true}
}
function findTheCheese (foods) {
var cheese = ["cheddar","gouda","camembert"]
var found = foods.find(function(food){
  return cheese.includes(food);
})

if (found != undefined){
  return found;
}
else{
 return `no cheese!`;
  }
