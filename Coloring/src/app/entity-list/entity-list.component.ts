import { Component, OnInit } from '@angular/core';
import { EntitiesService } from '../services/entities.service';
import {AppEntity} from "./entity-list.constant";

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {
  entities: AppEntity[] = [];
  constructor(private entityService: EntitiesService) { }

  ngOnInit(): void {
    this.entities = this.entityService.getEntities();
  }

}
