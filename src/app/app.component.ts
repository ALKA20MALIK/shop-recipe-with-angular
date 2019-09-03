import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-recipe-with-angular';
  loadedFeature='recipe'
  onNavigate(featre:string){
    this.loadedFeature=featre
  }
}
