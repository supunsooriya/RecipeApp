import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngrediants();
    this.subscription = this.slService.ingrediantChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  onEditItem(index: number) {
    this.slService.startedEditting.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
