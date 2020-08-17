import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
 // recipeSelected=new Subject<Recipe>();

  private recipes:Recipe[]=[
    new Recipe('A new Recipe',
    'It is simply awesome',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('Chicken',1)
    ]),

    new Recipe('Another new Recipe',
    'It is simply awesome',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
    [
      new Ingredient('Upma',1),
      new Ingredient('Idly',1)
    ])

  ];

    constructor(private slService:ShoppingListService){}

  getRecipes(){
    return this.recipes.slice(); //to return a new array without affecting the original one
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
