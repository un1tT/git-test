import { Component, OnInit } from '@angular/core';
import { EntitiesService } from '../entities.service';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {
  entities: string[] = [];
  constructor(private entityService: EntitiesService) { }

  ngOnInit(): void {
    this.entities = this.entityService.getEntities();
  }

}
