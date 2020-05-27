import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

export const appRoutes: Routes = [
  { path: "", redirectTo: '/recipesComponent', pathMatch: "full" },
  {
    path: "recipesComponent", component: RecipesComponent, children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailsComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  { path: "shopingListComponent", component: ShopingListComponent },
  { path: "signupComponent", component: SignupComponent },
  { path: "loginComponent", component: SigninComponent }
];
