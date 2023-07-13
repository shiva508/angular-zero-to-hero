import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/shared.component';
import { ShoppingListService } from './shopping-service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onAddingIngredient(ingredient: Ingredient) {
    this.shoppingListService.onAddingIngredient(ingredient);
  }
}
