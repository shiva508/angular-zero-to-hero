import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/shared.component';
import { RecipeService } from '../recipe-service/recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-service/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);

    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipeById(Number(params['id']));
    });
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsFromRecipe(this.recipe.ingredients);
  }
  navToEditScreen() {
    this.router.navigate(['']);
  }
}
