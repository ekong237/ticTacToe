// make board
class TTT {
  constructor() {
    this.board = this.makeBoard();
  }

  makeBoard() {
    let board = [];
    for (var i = 0; i < 3; i++) {
      board.push(['_','_','_']);
    } 
    // console.log(board);
    return board;
  }

  addX(x, y) { //top row is 0, left column is 
    this.board.forEach((row, i) => {
      if (x === i) {
        row[y] = 'X';
      }
    })
  }

  addO(x, y) {
    this.board.forEach((row, i) => {
      if (x === i) {
        row[y] = 'O';
      }
    })
  }

  hasThree(){
    let win = false;
    // if all in one row is same X or O
    // if y's are the same
    let possible = ['X', 'O'];
    while (possible.length > 0){
      let piece = possible.pop();
      // console.log('piece',piece);
      for (var i = 0; i < this.board; i++) {
        let row = this.board[i];
        console.log(row);
        if (row.join('') === 'OOO' || row.join('') === 'XXX') {
          win = true;
          return true;
        }
      }
      
    }
    return win;
  }
}

var myTTT = new TTT();
// myTTT.makeBoard();
// console.log(myTTT.board);
myTTT.addO(0,0);
myTTT.addO(0,1);
myTTT.addO(0,2);
console.log(myTTT.board);
console.log(myTTT.hasThree());
// place

// 