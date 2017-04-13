export class Minefield {
  width: number;
  height: number;
  field: string[][];
  bombs: number[][];
  flagCount: number;
  foundBomb: boolean;

  constructor(x: number, y: number){
    this.width = x;
    this.height = y;
    this.field = [];
    this.bombs = [];
    this.flagCount = 0;
    this.foundBomb = false;
    for(let i=0; i<y; i++){
      let row: string[] = [];
      this.field.push(row);
      for(let j=0; j<x; j++){
        row.push("-")
      }
    }
  }

  print(): string{
    let row: string = "";

    for(let i=0; i<this.height; i++) {
      for(let j = 0; j<this.width; j++) {
        row += this.field[i][j];
      }
      row += "/n";
    }
    return row;
  }

  setBomb(x, y){
    this.bombs.push([x, y])
  }

  bombCount(): number {
    return this.bombs.length - this.flagCount;
  }

  setFlag(x, y){
    this.flagCount++;
    this.field[x][y] = "?";
  }

  explore(x, y): void {
    if (this.bombAt(x, y)) {
      this.showAllBombs();
      this.foundBomb = true;
    }
    else {
      this.field[x][y] = this.adjacentBombs(x, y);
    }
  }

  adjacentBombs(x: number, y: number): string {
    let upper = this.bombAt(x, y-1) ? 1 : 0;
    let upperRight = this.bombAt(x+1, y-1) ? 1 : 0;
    let right = this.bombAt(x+1, y) ? 1 : 0;
    let lowerRight = this.bombAt(x+1, y+1) ? 1 : 0;
    let lower = this.bombAt(x, y+1) ? 1 : 0;
    let lowerLeft = this.bombAt(x-1, y+1) ? 1 : 0;
    let left = this.bombAt(x-1, y) ? 1 : 0;
    let upperLeft = this.bombAt(x-1, y+1) ? 1 : 0;
    let sumBombs = upper + upperRight + right + lowerRight + lower + lowerLeft + left + upperLeft;
    
    if (sumBombs == 0) {
      return " ";
    } else {
      return sumBombs.toString();
    }
  }

  bombAt(x: number, y: number): boolean {
    for (let i=0; i<this.bombs.length; i++){
      if (this.bombs[i][0] == x && this.bombs[i][1] == y) {
        return true;
      }
      else { 
        return false;
      }      
    }
  }

  bombAt2(x: number, y: number): boolean {
    this.bombs.forEach(function(bomb) {
      if (bomb[0] == x && bomb[1] == y) {
        return true;
      } else {
        return false}
    });  
    return false;
  }

  showAllBombs(){
    for (let i=0; i<this.bombs.length; i++){
      let bomb = this.bombs[i];
      this.field[bomb[0]][bomb[1]] = "*";
    }
  }

  getSmiley(){
    let countDashes = 0; 
    for (let x = 0; x<this.height; x++){
      for (let y = 0; y<this.width; y++){
        if (this.field[x][y] == "-"){
          countDashes++;
        }   
      }
    }  
    if (this.foundBomb){
      return "loser";
    } else if (countDashes == 0 && this.bombCount() == 0) {
      return "winner";
    } else {
      return "play on!";
    }
  }

}