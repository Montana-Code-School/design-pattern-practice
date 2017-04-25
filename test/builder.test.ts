import Meal from '../src/Meal';
import { expect } from "chai";
import Builder from "../src/Builder";
import MealBuilder from "../src/MealBuilder";

describe("Builder", function(){
  it("makes a steak dinner", function(){
    let builder: Builder = new MealBuilder();
    let steakDinner: Meal = builder.make(
      "steak dinner",
      ["mashed potatoes", "green beans"]
    );
    expect(steakDinner.name).to.eql("steak dinner");
    expect(steakDinner.sides).to.eql(["mashed potatoes", "green beans"]);

  })
});
