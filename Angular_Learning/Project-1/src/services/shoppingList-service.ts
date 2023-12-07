import {Ingredient} from "../app/shopping-list/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{

  private ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ]

  public ingredientsChanged = new EventEmitter<Ingredient[]>();
  public getIngredients() : Ingredient[]{
    return this.ingredients.slice();
  }

  public addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }

  public addIngredients(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
  }
}
