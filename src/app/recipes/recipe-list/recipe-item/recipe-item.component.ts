import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/shared.component';
import { RecipeService } from '../../recipe-service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
