import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test Recipe','test','https://barefeetinthekitchen.com/wp-content/uploads/2017/08/Nestea-Spinach-Pasta-Salad-FINAL-1-1-of-1.jpg'),
    new Recipe('B Test Recipe','Test Desc','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/27/0/IG0505_Asian-Grilled-Salmon_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387475767206.jpeg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
