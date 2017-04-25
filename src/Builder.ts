import Meal from './Meal';
interface Builder {
  make(name: string, sides: Array<string>): Meal;
}

export default Builder;
