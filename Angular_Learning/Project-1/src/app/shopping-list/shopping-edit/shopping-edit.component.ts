import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../ingredient.model";
import {ShoppingListService} from "../../../services/shoppingList-service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameElementRef') nameRef : ElementRef;
  @ViewChild('amountElementRef') amountRef : ElementRef;

  constructor(private shoppingListService :  ShoppingListService) {
  }
  onAddItem(event : Event){

   event.preventDefault();
    const name : string = this.nameRef.nativeElement.value;
    const amount : string = this.amountRef.nativeElement.value;

    this.shoppingListService.addIngredient(new Ingredient(name, parseInt(amount)));
  }
}
