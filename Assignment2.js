for (var i = 0; i < 10; i++) {
	var s = '';
	for (var j = 0; j < 10; j++) {
		s = s + i + j + ' ';
	}
	console.log(s);
}

//Write a function that takes a number n as an argument and print
function printTriangle(n){
  for(let i = 1; i <= n; i++){
    let s = "";
    for(let j = 1; j <= i; j++){
      s += j + " ";
    }
    console.log(s);
  }
}
printTriangle(5);
//Write a function that prints out an 8×8 grid. At each position of the grid, there is either whitespace or a # character. The characters should form a chessboard.
function printChessBoard(){
  for(let i = 0; i < 8; i++){
    let s = "";
    for(let j = 0; j < 8; j++){
      if((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0 ))
      {
        s += " ";
      }
      else{
        s += "#";
      }
    }
    console.log(s);
  }
}
printChessBoard();