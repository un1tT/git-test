import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityDescriptionComponent } from './entity-description/entity-description.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    EntityDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
