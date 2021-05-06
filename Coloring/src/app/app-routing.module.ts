import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntityListComponent} from './entity-list/entity-list.component';
import {EntityDescriptionComponent} from './entity-description/entity-description.component';

const routes: Routes = [
  { path: '', component: EntityListComponent },
  { path: 'description/:entity', component: EntityDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
