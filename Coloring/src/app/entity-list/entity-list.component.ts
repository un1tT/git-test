import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { EntitiesService } from '../services/entities.service';
import {AppEntities, AppEntity} from './entity-list.constant';
import {MatDialog} from '@angular/material/dialog';
import {EntityFormComponent} from '../entity-form/entity-form.component';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {
  entities: AppEntity[] = [];
  @Output() createEntity = new EventEmitter();


  constructor(private entityService: EntitiesService, public dialog: MatDialog) {
    this.createEntity.subscribe(this.entityService.entitiesObserver);
    this.entities = this.entityService.getEntities();
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EntityFormComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createEntity.emit(result);
        this.entities = this.entityService.getEntities();
      }
    });
  }
}
