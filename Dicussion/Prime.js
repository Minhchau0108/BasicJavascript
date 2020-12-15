function IsPrime(n){
  if(n <= 2) return true;
  for(let i = 2; i <= n/2; i++){
    if(n % i == 0)
      return false;
  }
  return true;
}
console.log(IsPrime(7));
console.log(IsPrime(3));
console.log(IsPrime(21));