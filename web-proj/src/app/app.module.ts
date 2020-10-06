import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationTilesComponent } from './navigation-tiles/navigation-tiles.component';
import { DisplayBoxComponent } from './display-box/display-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationTilesComponent,
    DisplayBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
