import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  startedEditting = new Subject();

  ingrediantChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 4),
    new Ingredient('orange', 5)
  ];

  getIngrediants() {
    return this.ingredients.slice();
  }

  getIngrediant(index: number) {
    return this.ingredients[index];
  }

  onIngrediantAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingrediantChanged.next(this.ingredients.slice());
  }

  addIngrediants(ingrediants: Ingredient[]) {
    this.ingredients.push(...ingrediants);
    this.ingrediantChanged.next(this.ingredients.slice());
  }

  updateIngrediant(index: number, newIngrediant: Ingredient) {
    this.ingredients[index] = newIngrediant;
    this.ingrediantChanged.next(this.ingredients.slice());
  }

  deleteIngrediant(index: number) {
    this.ingredients.slice(index, 1);
    this.ingrediantChanged.next(this.ingredients.slice());
  }
}