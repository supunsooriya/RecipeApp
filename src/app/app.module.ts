import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      ShopingListComponent,
      RecipeDetailsComponent,
      RecipeListComponent,
      ShopingEditComponent,
      RecipeItemComponent,
      DropdownDirective,
      RecipeStartComponent,
      RecipeEditComponent,
      SignupComponent,
      SigninComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
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
      ]),

   ],
   providers: [
      ShoppingListService,
      RecipeService,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
