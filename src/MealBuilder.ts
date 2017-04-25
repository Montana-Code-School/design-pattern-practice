import Meal from './Meal';
import Builder from './Builder';
export default class MealBuilder implements Builder {

  public make(name: string, sides: Array<string>): Meal {
    return new Meal(name, sides);
  }
}
