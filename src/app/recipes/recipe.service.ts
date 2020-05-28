import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from "@angular/core";
import { ShoppingListService } from '../shoping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Recipe 1',
      'This is simply test 1',
      'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135__340.jpg',
      [
        new Ingredient('one', 4),
        new Ingredient('one', 5)
      ]),
    new Recipe('Recipe 2',
      'This is simply test 1',
      'https://picturetherecipe.com/wp-content/uploads/2018/04/Sweet-Sour-Salmon-Featured-395x500.jpg',
      [
        new Ingredient('one', 4),
        new Ingredient('one', 5)
      ]),
    new Recipe('Recipe 3',
      'This is simply test 1',
      'https://picturetherecipe.com/wp-content/uploads/2018/04/Strawberry-Frech-Cake-PictureTheRecipe-Featured-395x500.jpg',
      [
        new Ingredient('one', 4),
        new Ingredient('one', 5)
      ]),
    new Recipe('Recipe 1',
      'This is simply test 1',
      'https://images.unsplash.com/photo-1485451456034-3f9391c6f769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('one', 4),
        new Ingredient('one', 5)
      ]),
    new Recipe('Recipe 2',
      'This is simply test 1',
      'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('one', 4),
        new Ingredient('one', 5)
      ]),
    new Recipe('Recipe 3',
      'This is simply test 1',
      'https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('one', 4),
        new Ingredient('one', 5)
      ])
  ];
  recipeChanged = new Subject();
  constructor(private slService: ShoppingListService) { }



  grtRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngrediantsToShoppingList(ingredient: Ingredient[]) {
    // tslint:disable-next-line: no-unused-expression
    this.slService.addIngrediants(ingredient);
  }

  addResipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes);
  }

  updateRecipe(index: number, newResipe: Recipe) {
    this.recipes[index] = newResipe;
    this.recipeChanged.next(this.recipes);
  }
}