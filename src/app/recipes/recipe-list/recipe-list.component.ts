import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from "@angular/core";
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter();
  recipe: Recipe[];
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.recipeService.grtRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  onNewResepe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
