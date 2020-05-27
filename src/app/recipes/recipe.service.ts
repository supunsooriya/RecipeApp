import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from "@angular/core";
import { ShoppingListService } from '../shoping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) { }

  private recipe: Recipe[] = [
    new Recipe('Recipe 1',
      'This is simply test 1',
      'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135__340.jpg',
      [
        new Ingredient('one', 4),
        new Ingredient('one', 5)
      ]),
    new Recipe('Recipe 2',
      'This is simply test 2',
      'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135__340.jpg',
      [
        new Ingredient('one', 22),
        new Ingredient('one', 44)
      ])
  ];

  grtRecipes() {
    return this.recipe.slice();
  }

  getRecipe(index: number) {
    return this.recipe[index];
  }

  addIngrediantsToShoppingList(ingredient: Ingredient[]) {
    // tslint:disable-next-line: no-unused-expression
    this.slService.addIngrediants(ingredient);
  }
}