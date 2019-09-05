import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected=new EventEmitter<Recipe>()

   private recipes:Recipe[]=[
        new Recipe('A test Recipe',
        'test','https://barefeetinthekitchen.com/wp-content/uploads/2017/08/Nestea-Spinach-Pasta-Salad-FINAL-1-1-of-1.jpg',
        [
          new Ingredient('meat',1),
          new Ingredient('tamoto',20)],
        ),
        
        new Recipe('B Test Recipe',
        'Test Desc','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/27/0/IG0505_Asian-Grilled-Salmon_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387475767206.jpeg',
        [
          new Ingredient('onion',11),
          new Ingredient('capsicum',50)],
        )
      
      ]
    
    getRecipes(){
        return this.recipes.slice()
    }
}