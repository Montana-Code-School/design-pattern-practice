import User from "./User";
export default class Employee extends User{
  start: string;
  setStart(start: string): void {
    this.start = start;
  }
}
