import { Component, OnInit } from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingradient[] = [
    new Ingradient('Apple', 5),
    new Ingradient('Tomato', 10),
  ];
  constructor() {}
  ngOnInit(): void {}
}
