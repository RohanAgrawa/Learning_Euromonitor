import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeModel} from "../../recipe.model";
import {RecipeService} from "../../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe : RecipeModel;
  dummy : string = "https://cdn5.vectorstock.com/i/1000x1000/39/24/no-food-sign-on-white-background-vector-20403924.jpg"
  constructor(private recipeService : RecipeService) {
  }
  onRecipeSelect(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
