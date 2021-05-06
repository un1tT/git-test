import { Component, OnInit } from '@angular/core';
import { EntitiesService } from '../services/entities.service';
import {AppEntity} from './entity-list.constant';
import {MatDialog} from '@angular/material/dialog';
import {EntityFormComponent} from '../entity-form/entity-form.component';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {
  entities: AppEntity[] = [];

  constructor(private entityService: EntitiesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.entities = this.entityService.getEntities();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EntityFormComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.entityService.addEntity(result);
      this.entities = this.entityService.getEntities();
    });
  }
}
