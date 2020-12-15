// For-loop 
function gcdLoop(a,b){
  a = Math.abs(a);
  b = Math.abs(b);
  let result = 1;
  for(let i = 1; i <= Math.min(a,b); i++){
    if(a % i == 0 && b % i == 0){
      result = i;
    }
  }
  console.log(result);
  return result;
}
gcdLoop(7,15);


//Euclid
function gcd(a,b){
  a = Math.abs(a);
  b = Math.abs(b);

  while (a != 0 && b != 0){
    if(a > b){
      a = a % b;
    }
    else{
      b = b % a;
    }
  }
  console.log(a+b);
  return a + b;
}
gcd(12,18);

//Least common multiple
function lcm(a,b){
  let result = a * b / gcd(a,b);
  console.log(result);
  return result;
}
lcm(1,5);