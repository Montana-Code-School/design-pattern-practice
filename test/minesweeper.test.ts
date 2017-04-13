import { expect } from "chai";
import * as sinon from "sinon";
import { Minefield } from "../src/Minefield";


describe("Minesweeper", function () {
  it("minefield should have height and width", function () {
    let minefield: Minefield = new Minefield(5, 5);
    let x: number = minefield.width;
    let y: number = minefield.height;
    expect(x).to.be.equal(5);
    expect(y).to.be.equal(5);

  });

  it("should print an unexplored minefield", function () {
    let minefield: Minefield = new Minefield(1, 1);    
    let print: string = minefield.print();
    expect(print).to.be.equal("-/n");
  });

  it("should print an unexplored minefield larger than 1, 1", function () {
    let minefield: Minefield = new Minefield(3, 3);    
    let print: string = minefield.print();
    expect(print).to.be.equal("---/n---/n---/n");
  });

 it("should print an unexplored minefield that is not a square", function () {
    let minefield: Minefield = new Minefield(3, 5);    
    let print: string = minefield.print();
    expect(print).to.be.equal("---/n---/n---/n---/n---/n");
  });

it("should print an unexplored minefield with one bomb at a defined place", function () {
    let minefield: Minefield = new Minefield(3, 3); 
    let bombx = 0;
    let bomby = 0;
    minefield.setBomb(bombx,bomby);   
    let print: string = minefield.print();
    expect(print).to.be.equal("---/n---/n---/n");
  });

  it("should count the number of bombs", function () {
    let minefield: Minefield = new Minefield(3, 3); 
    expect(minefield.bombCount()).to.be.equal(0);
    minefield.setBomb(0, 0);
    expect(minefield.bombCount()).to.be.equal(1);
  });

  it("should set flags", function () {
    let minefield: Minefield = new Minefield(3, 3);
    minefield.setBomb(0, 0);
    expect(minefield.bombCount()).to.be.equal(1);
    minefield.setFlag(2, 2);
    expect(minefield.bombCount()).to.be.equal(0);
    expect(minefield.print()).to.be.equal("---/n---/n--?/n");
  });

  it("should set explored on space with no bomb", function () {
    let minefield: Minefield = new Minefield(3, 3);
    minefield.setBomb(0, 0);
    expect(minefield.bombCount()).to.be.equal(1);
    minefield.explore(2, 2);
    expect(minefield.bombCount()).to.be.equal(1);
    expect(minefield.field[2][2]).to.be.equal(" ");
  });

  it("should set go boom on space with bomb", function () {
    let minefield: Minefield = new Minefield(3, 3);
    minefield.setBomb(0, 0);
    expect(minefield.bombCount()).to.be.equal(1);
    minefield.explore(0, 0);
    expect(minefield.bombCount()).to.be.equal(1);
    expect(minefield.field[0][0]).to.be.equal("*");
  });

  it("should show all bombs when one explodes", function () {
    let minefield: Minefield = new Minefield(3, 3);
    minefield.setBomb(0, 0);
    minefield.setBomb(1, 1);
    expect(minefield.bombCount()).to.be.equal(2);
    minefield.explore(0, 0);
    expect(minefield.bombCount()).to.be.equal(2);
    expect(minefield.field[0][0]).to.be.equal("*");
    expect(minefield.field[1][1]).to.be.equal("*");
    expect(minefield.getSmiley()).to.be.equal("loser");
  });

  it("should show winner when all bombs flagged and everything else explored", function () {
    let minefield: Minefield = new Minefield(2, 2);
    minefield.setBomb(0, 0);
    minefield.setBomb(1, 1);
    expect(minefield.bombCount()).to.be.equal(2);
    minefield.explore(0, 1);
    minefield.explore(1, 0);
    minefield.setFlag(0, 0);
    minefield.setFlag(1, 1);
    expect(minefield.bombCount()).to.be.equal(0);
    expect(minefield.getSmiley()).to.be.equal("winner");
  });

it("should show 1 adjacent bomb when explored", function () {
  let minefield: Minefield = new Minefield(2, 2);
  minefield.setBomb(0, 0);
  expect(minefield.bombCount()).to.be.equal(1);
  minefield.explore(0, 1);
  expect(minefield.field[0][1]).to.be.equal("1");
  expect(minefield.getSmiley()).to.be.equal("play on!");
});

it("should show 8 adjacent bomb when explored", function () {
  let minefield: Minefield = new Minefield(3, 3);
  minefield.setBomb(0, 0);
  expect(minefield.bombCount()).to.be.equal(1);
  minefield.explore(0, 1);
  expect(minefield.field[0][1]).to.be.equal("1");
  expect(minefield.getSmiley()).to.be.equal("play on!");
});

});
