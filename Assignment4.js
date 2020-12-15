//returns a list of leap years from the year start to the year end inclusively. 
function isLeapYear(year){
  if(year % 4 == 0 &&  year % 100 != 0 || year % 400 == 0){
    return true;
  }
  return false;
}

function getLeapYear(start,end){
  let result = [];
  for(let y = start; y <= end; y++){
    if(isLeapYear(y)){
      result.push(y);
    }
  }
  return result;
}
console.log(getLeapYear(1899, 2001));


//returns a copy of the input array in reversed order.
function reverseArray(arr){
  let reverseArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}

var arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));

function getRandomInteger(start,end) {
  return (start + Math.floor(Math.random() * (end - start + 1)));
}
//Use getRandomInt() from Assignment 1 to generate an array called evenNumbers containing 100 random integer numbers in the range 0 to 100 inclusively. Remove all odd numbers in evenNumbers and store them in an array called oddNumbers. Log both arrays to the console.

function createArray(){
  let arr = [];
  for(let i = 0; i < 100; i++){
    arr.push(getRandomInteger(0, 100));
  }
  return arr;
}

let evenNumbers = createArray();

function removeOdd(arr){
  let oddNumbers = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
      oddNumbers.push(arr[i]);
      arr.splice(i,1);
      i--;
    }
  }
  console.log(`Even array: ${arr}`);
  console.log(`Odd array: ${oddNumbers}`);
}
removeOdd(evenNumbers);