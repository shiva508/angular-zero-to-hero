import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/shared.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Biryani',
      'Basmathi rice, mutton',
      'https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg'
    ),
    new Recipe(
      'Natu Kodi',
      'Home chicken, Masala',
      'https://images.slurrp.com/prod/articles/rp1vz7to7z.webp'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
