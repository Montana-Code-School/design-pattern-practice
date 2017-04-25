export default class Meal {
  name : string;
  sides : Array<string>;
  constructor(name: string, sides: Array<string>) {
    this.name = name;
    this.sides = sides;
  }
}
