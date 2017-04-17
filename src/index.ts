import Minefield from './Minefield';

let minefield = new Minefield(3, 3);
minefield.setRandomBombs(2);
let bombs = minefield.bombCount().toString();
document.getElementById("mine").innerHTML = minefield.print();
document.getElementById("status").innerHTML = minefield.getSmiley();
document.getElementById("bombCount").innerHTML = bombs;
document.getElementById("explore").onclick = explore;
document.getElementById("setFlag").onclick = setFlag;

function setFlag(e) {
  e.preventDefault();
  let x = (<HTMLInputElement>document.getElementById('x')).value;
  let y = (<HTMLInputElement>document.getElementById('y')).value;
  minefield.setFlag(parseInt(x), parseInt(y));
  bombs = minefield.bombCount().toString();
  document.getElementById("mine").innerHTML = minefield.print();
  document.getElementById("status").innerHTML = minefield.getSmiley();
  document.getElementById("bombCount").innerHTML = bombs;
}

function explore(e){
  e.preventDefault();
  let x = (<HTMLInputElement>document.getElementById('x')).value;
  let y = (<HTMLInputElement>document.getElementById('y')).value;
  console.log(x, y);
  minefield.explore(parseInt(x), parseInt(y));
  console.log(minefield.print());
  document.getElementById("mine").innerHTML = minefield.print();
  document.getElementById("status").innerHTML = minefield.getSmiley();
  document.getElementById("bombCount").innerHTML = bombs;
}