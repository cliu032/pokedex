import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { itemContainerComponent } from './itemContainer.component';
import { itemListComponent } from './itemList.component';
import { itemDetailComponent } from './itemDetail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, itemContainerComponent, itemListComponent, itemDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
