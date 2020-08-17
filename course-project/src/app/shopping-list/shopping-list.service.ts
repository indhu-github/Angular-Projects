import {Ingredient} from '../shared/ingredient.model'
import {Subject} from 'rxjs';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
  //ingredientsChanged=new EventEmitter<Ingredient[]>();
  ingredientsChanged=new Subject<Ingredient[]>();
  private ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Mangoes',6)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    //we use next() instead of emit() when we use Subject()
    //Subject() is the optimal solution to use
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
