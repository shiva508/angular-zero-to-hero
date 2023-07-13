import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/shared.component';
import { ShoppingListService } from '../shopping-service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('amount') amount!: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}
  addNew() {
    this.shoppingListService.onAddingIngredient(
      new Ingredient(
        this.name.nativeElement.value,
        this.amount.nativeElement.value
      )
    );
  }
}
