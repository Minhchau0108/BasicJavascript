var s = 'Life, the universe and everything. Answer:';
// "Life, the universe and everything. Answer: 42"
console.log(`${s} ${s.length}`);

console.log('cat'[1]);

var sentence = 'The quick brown fox jumps over the lazy dog.';
var word = 'fox';
console.log(sentence.includes(word)); //true

var str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat')); //true

var str2 = 'Is this a question';
console.log(str2.endsWith('?')); //false

var str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));// "the lazy dog." : extract from index 31 to end
console.log(str.slice(4, 19)); //"quick brown fox" : extract from index 4 to 19
console.log(str.slice(-4));//"dog." :extract from the end
console.log(str.slice(-9, -5));//"lazy" :extract from the end

var str = 'The quick brown fox jumps over the lazy dog.';

var words = str.split(' ');
console.log(words);
console.log(words[3]); //"fox"

var str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';

console.log(str.toLowerCase()); //"the quick brown fox jumps over the lazy dog."
console.log(str.toUpperCase()); // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

const greeting = '   Hello world!   ';
console.log(greeting.trim()); //"Hello world!";

var variousThings = [
  true, true, true, false,
  true, true, 1, true,
  true, false, true, false,
  true, "hello", false, true,
  true, true, true, true,
  false, false, "world", true
  ];

function findFirstString(arr){
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'string'){
      console.log(arr[i]);
      return arr[i];
    }
  }
  console.log('Not Found String');
  return;
}
findFirstString(variousThings);


var emails = ['  PETER@gmail.com', 'Mia1024@gmail.COM  ', ' Dorian@gmail.com '];
function normalizeEmails(emails){
  let result = [];
  for(let i = 0; i < emails.length; i++){
    let editEmail = emails[i].trim().toLowerCase();
    result.push(editEmail);
  }
  return result;
}
console.log(normalizeEmails(emails));


//Write a function called splitNames(fullName) that takes an full name and return an object that contains firstName and lastName as the key.
function splitNames(fullName){
  let names = fullName.split(" ");
  let obj = {};
  obj.firstName = names[0];
  obj.lastName = names[names.length - 1];
  return obj;
}
console.log(splitNames("Peter Parker"));


//Generate random password: write a function getRandomString(length) that takes a number as the length and generates an arbitrary string by picking characters randomly from A-Z, a-z, and 0-9.
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getRandomItem(arr){
  let num = Math.floor(Math.random() * arr.length)
  return arr[num];
}

function getRandomString(length) {
  let s = "";
  for(let i = 0; i < 5; i++){
      let num = Math.floor(Math.random() * characters.length)
      s += characters[num];
  }
  return s;
}

console.log(getRandomString(5));


