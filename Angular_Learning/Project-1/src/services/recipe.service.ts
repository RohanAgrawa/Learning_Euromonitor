import {RecipeModel} from "../app/recipes/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../app/shopping-list/ingredient.model";
import {ShoppingListService} from "./shoppingList-service";

@Injectable()
export class RecipeService{

  private recipes : RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply a test', 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-4.jpg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 5)]),
    new RecipeModel('Another Test Recipe', 'This is simply a test', 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-4.jpg', [new Ingredient('Meat', 4), new Ingredient('Buns', 5)])
  ];

  public recipeSelected = new EventEmitter<RecipeModel>();

  constructor(private shoppingListService : ShoppingListService) {

  }
  getRecipes() : RecipeModel[]{
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
