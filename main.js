/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}


/*******************
 * YOUR CODE BELOW *
 *******************/
  // Inserting images of the dice to each empty img tag.
 document.querySelector('#d6-roll').src ="images/start/d6.png";
 document.querySelector('#double-d6-roll-1').src = 'images/start/d6.png';
 document.querySelector('#double-d6-roll-2').src = 'images/start/d6.png';
 document.querySelector('#d12-roll').src = 'images/start/d12.jpeg';
 document.querySelector('#d20-roll').src = 'images/start/d20.jpg';

 
 // Make function.
 // Make a variable called result that will call in getRandomNumber function using 6 in the parentheses.
 // Push the results into the sixes array.
 // Change the image based on the result with the matching png
 // query select the mean and median then use innerText so you can call in function to calculate.
 const rollSix = function() {
  let result = getRandomNumber(6);
  sixes.push(result);

  document.querySelector('#d6-roll').src = `images/d6/${result}.png`
  document.querySelector('#d6-rolls-mean').innerText = mean(sixes).toFixed();
  document.querySelector('#d6-rolls-median').innerText = median(sixes);
}

const doubleSix = function() {
  let diceOne = getRandomNumber(6);
  let diceTwo = getRandomNumber(6);
  doubleSixes.push(diceOne, diceTwo);

  document.querySelector('#double-d6-roll-1').src = `images/d6/${diceOne}.png`;
  document.querySelector('#double-d6-roll-2').src = `images/d6/${diceTwo}.png`;
  document.querySelector('#double-d6-rolls-mean').innerText = mean(doubleSixes).toFixed()
  document.querySelector('#double-d6-rolls-median').innerText = median(doubleSixes)
}

const rollTwelve = function() {
  let roll = getRandomNumber(12);
  twelves.push(roll);

  document.querySelector('#d12-roll').src = `images/numbers/${roll}.png`
  document.querySelector('#d12-rolls-mean').innerText = mean(twelves).toFixed();
  document.querySelector('#d12-rolls-median').innerText = median(twelves)
}

const rollTwenty = function() {
  let roll = getRandomNumber(20);
  twenties.push(roll);

  document.querySelector('#d20-roll').src = `images/numbers/${roll}.png`;
  document.querySelector('#d20-rolls-mean').innerText = mean(twenties).toFixed();
  document.querySelector('#d20-rolls-median').innerText = median(twenties);
  
}


/*******************
 * EVENT LISTENERS *
 *******************/
document.querySelector('#d6-button').addEventListener('click', rollSix);
document.querySelector('#double-d6-buttons').addEventListener('click', doubleSix);
document.querySelector('#d12-button').addEventListener('click', rollTwelve);
document.querySelector('#d20-button').addEventListener('click', rollTwenty); 
document.querySelector('#reset-button').addEventListener('click', resetFunc);

/******************
 * RESET FUNCTION *
 ******************/
function resetFunc() {
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;
  

  document.querySelector('#d6-roll').src ="images/start/d6.png";
  document.querySelector('#double-d6-roll-1').src = 'images/start/d6.png';
  document.querySelector('#double-d6-roll-2').src = 'images/start/d6.png';
  document.querySelector('#d12-roll').src = 'images/start/d12.jpeg';
  document.querySelector('#d20-roll').src = 'images/start/d20.jpg';

}

/****************
 * MATH SECTION *
 ****************/
function mean(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}


function median(arr) {
  let median = 0;
  const count = arr.length;
  arr.sort();

  if (count % 2 === 0) {
    median = (arr[count / 2 -1] + arr[count /2]) / 2;
  } else {
    median = arr[(count -1) / 2];
  }
  return median.toFixed();
}



