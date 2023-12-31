import {Component, OnInit} from '@angular/core';
import {Ingredient} from "./ingredient.model";
import {ShoppingListService} from "../../services/shoppingList-service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{

  public ingredients : Ingredient[];
  constructor(private shoppingListService : ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients : Ingredient[]) =>{
          this.ingredients = ingredients;
      }
    )
  }
}
