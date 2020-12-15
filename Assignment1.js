
console.log(Math.random()); 
// 4.5 --> 4
console.log(Math.floor(4.5)); 
// 4.5 --> 5
console.log(Math.ceil(4.5)); 
// 4.5 --> 5
console.log(Math.round(4.5)); 
// 4.49 --> 4
console.log(Math.round(4.49)); 

//Write a function named getRandomInt() that return a random integer number from 0 (inclusive) to 10 (exclusive)
function getRandomInt(){
  return Math.floor(Math.random() * 10);
}

//Put it in a loop that runs 100 times to check whether you see all of the numbers from 0 to 9?
for(let i = 0; i < 100; i++){
  console.log(getRandomInt());
}

//Improve the function so that it return a random integer number between start (inclusive) to end (inclusive)
function getRandomInteger(start,end) {
  return (start + Math.floor(Math.random() * (end - start + 1)));
}


//returns a random element in the array
function getRandomItem(arr){
  let num = Math.floor(Math.random() * arr.length)
  return arr[num];
}

let arr = ["apple", "orange", "kiwi"];

console.log(getRandomItem(arr));