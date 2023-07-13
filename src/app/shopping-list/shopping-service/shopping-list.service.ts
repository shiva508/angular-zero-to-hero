import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/shared.component';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor() {}

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients;
  }

  onAddingIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
