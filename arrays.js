
function isArrayLengthOdd(numbers) {
  // Your code here
  if(   numbers.length % 2 !== 0){
    return true;
  } else {
    return false;
  }
}

function isArrayLengthEven(numbers) {
  // Your code here
  if(   numbers.length % 2 == 0){
    return true;
  } else {
    return false;
  }}


function addLailaToArray(instructors) {
  // Your code here
   instructors.push("Laila");
   return instructors;
}

function eliminateTeam(teams) {
  // Your code here
  return teams.pop();
}

function secondHalfOfArrayIfItIsEven(fruits) {
  if(fruits.length % 2 == 0){
    let half = fruits.length / 2;
    return fruits.slice(half);
  } else {
    return [];
  }
}

/**
 * youGottaCalmDown(shout):
 * - receives a string shout
 * - returns the string shout with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  // Your code here
}

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
