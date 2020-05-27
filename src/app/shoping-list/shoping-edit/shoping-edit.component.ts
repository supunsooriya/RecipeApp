import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription, Subscriber } from 'rxjs';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) { }


  ngOnInit() {
    this.subscription = this.slService.startedEditting.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngrediant(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngrediant(this.editedItemIndex, newIngredient);
    } else {
      this.slService.onIngrediantAdded(newIngredient);
    }
    this.editMode = false;
    form.reset();

  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngrediant(this.editedItemIndex);
    this.onClear();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
