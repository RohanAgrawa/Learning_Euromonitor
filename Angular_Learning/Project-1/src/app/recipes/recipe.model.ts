import {Ingredient} from "../shopping-list/ingredient.model";

export class RecipeModel{

  public name : string;
  public description : string;
  public imageUrl : string;
  public ingredients : Ingredient[];
  constructor(name : string, description : string, imageUrl :  string, ingredients : Ingredient[]) {
    this.description = description;
    this.name = name;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
