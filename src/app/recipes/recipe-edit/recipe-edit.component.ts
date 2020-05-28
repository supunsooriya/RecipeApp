import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }else{
      this.recipeService.addResipe(this.recipeForm.value);
    }
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeImgredients = new FormArray([]);

    if(this.editMode){
     const recipe = this.recipeService.getRecipe(this.id);
     recipeName = recipe.name;
     recipeImagePath = recipe.imagePath;
     recipeDescription = recipe.description;
     if(recipe['ingrediants']){
       for(let ingrediant of recipe.ingrediants){
         recipeImgredients.push(
           new FormGroup({
             'name': new FormControl(ingrediant.name,Validators.required),
             'amount': new FormControl(ingrediant.amount,[Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)])
             
           })
         )

       }
     }
    }

    this.recipeForm = new FormGroup(
      {
        'name' : new FormControl(recipeName, Validators.required),
        'imagePath' : new FormControl(recipeImagePath,Validators.required),
        'description' : new FormControl(recipeDescription, Validators.required),
        'ingredients': recipeImgredients 
      }
    );
  }

  onAddIngrediant(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)])
      })
    );
  }

}
