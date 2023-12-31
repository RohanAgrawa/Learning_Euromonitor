import {Component, OnInit, Output} from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers : [RecipeService]
})
export class RecipesComponent implements OnInit{

  selectedRecipe :RecipeModel;


  constructor(private recipeService : RecipeService) {
  }
  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(
      (selectedRecipe : RecipeModel) => {
        this.selectedRecipe = selectedRecipe;
    });
  }
}
