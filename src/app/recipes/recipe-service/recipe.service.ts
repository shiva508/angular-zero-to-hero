import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient, Recipe } from 'src/app/shared/shared.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Biryani',
      'Basmathi rice, mutton',
      'https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg',
      [new Ingredient('Masale', 1), new Ingredient('Natu Kodi', 1)]
    ),
    new Recipe(
      2,
      'Natu Kodi',
      'Home chicken, Masala',
      'https://images.slurrp.com/prod/articles/rp1vz7to7z.webp',
      [new Ingredient('Mutton Biyani', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsFromRecipe(ingredientnew: Ingredient[]) {
    console.log(ingredientnew);
  }

  getRecipeById(id: number) {
    const recipe = this.recipes.find((res) => {
      return res.id === id;
    });
    return recipe;
  }
}
