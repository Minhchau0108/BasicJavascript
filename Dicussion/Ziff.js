function ZiffZubb(start,end){
  for(let i = start; i <= end; i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log('ZiffZubb');
    }
    else if (i % 3 == 0){
      console.log('Ziff');
    }
    else if (i % 5 == 0){
      console.log('Zubb');
    }
    else{
      console.log(`${i}`);
    }
  }
}
ZiffZubb(1,30);