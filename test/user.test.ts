
import { expect } from "chai";
import User from "../src/User";
import Employee from "../src/Employee";

describe("User", function(){
  it("does something", function(){
    let john: User = new User("John");
    expect(john.name).to.eql("John");
  })

  it("makes employees", function(){
    let jane: Employee = new Employee("Jane");
    jane.setStart("May 1, 2017")
    expect(jane.name).to.eql("Jane");
    expect(jane.start).to.eql("May 1, 2017");
  })

});
