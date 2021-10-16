import { Component } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GroceryApp';
  topTitle="Grocery List";
  constructor(private router:Router) {
  }


  updateDisplayTitle() {
    if(this.router.url==='/purchaseHistory')
    {
      this.topTitle="Purchase History";
    }
    else if(this.router.url==='/groceryList')
    {
      this.topTitle="Grocery List";
    }
    else if(this.router.url==='/about')
    {
      this.topTitle="About";
    }
  }
}
