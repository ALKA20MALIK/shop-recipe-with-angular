import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientChanged=new EventEmitter<Ingredient[]>()
    
    private ingredients:Ingredient[]=[
        new Ingredient('apples',5),
        new Ingredient('tamoto',10)
      ]

    getIngredients(){
        return this.ingredients.slice()
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientChanged.emit(this.ingredients.slice())
    }
}