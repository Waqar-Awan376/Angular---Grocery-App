import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {RouterModule, Routes} from '@angular/router';
import {MatInputModule} from "@angular/material/input";
import { AboutComponent } from './about/about.component';


const appRoutes:Routes=[
  {path:'',component:GroceryListComponent},
  {path:'groceryList',component:GroceryListComponent},
  {path:'purchaseHistory',component:PurchaseHistoryComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:GroceryListComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    PurchaseHistoryComponent,
    MainNavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    LayoutModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
