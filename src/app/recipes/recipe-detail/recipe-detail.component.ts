import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/shared.component';
import { RecipeService } from '../recipe-service/recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-service/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}
  ngOnInit(): void {
    console.log(this.recipe);
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsFromRecipe(this.recipe.ingredients);
  }
}
