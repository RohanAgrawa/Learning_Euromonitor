import {Component, Input} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input()recipe : RecipeModel;

  constructor(private recipeService : RecipeService) {
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
