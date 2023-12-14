import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes : Routes = [
  {path : '', redirectTo : '/recipes', pathMatch : 'full', title : 'Recipe Home'},
  {path : 'recipes', component : RecipesComponent, title : 'Recipes', children : [
      {path : '', component : RecipeStartComponent},
      {path : 'new', component : RecipeEditComponent},
      {path : ':id', component : RecipeDetailComponent},
      {path : ':id/edit', component : RecipeEditComponent}
    ]},
  {path : 'shopping-list', component : ShoppingListComponent, title : 'Shopping List'}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
