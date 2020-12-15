const yes = ['Yes!', 'Sure!', 'Of course!'];
const no = ['No way!', 'Never!', 'Not a chance!'];
const maybe = ['Maybe!', '50%', 'a little'];

let message = document.getElementById('result');
let element = document.getElementById("page");

function getRandomItem(arr){
  let num = Math.floor(Math.random() * arr.length);
  return arr[num];
}
function play(){
  element.classList.add("flashing");

  setTimeout(function getAnswer(){
  let numberArray = Math.floor(Math.random() * 3);
  let answer;

  if(numberArray === 0){
    answer = getRandomItem(yes);
  }
  else if(numberArray == 1){
    answer = getRandomItem(no);
  }
  else{
    answer = getRandomItem(maybe);
  }
  message.innerHTML = answer;
  
  element.classList.remove("flashing");
  },4000);
}
