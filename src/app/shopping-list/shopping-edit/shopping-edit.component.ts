import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/shared.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('amount') amount!: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit() {}
  addNew() {
    this.addedIngredient.emit(
      new Ingredient(
        this.name.nativeElement.value,
        this.amount.nativeElement.value
      )
    );
  }
}
