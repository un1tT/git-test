import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppEntity} from '../entity-list/entity-list.constant';
import {EntitiesService} from '../services/entities.service';

@Component({
  selector: 'app-entity-description',
  templateUrl: './entity-description.component.html',
  styleUrls: ['./entity-description.component.scss']
})
export class EntityDescriptionComponent implements OnInit {
  readonly entityName: string;
  readonly description: string = '';

  constructor(private activatedRoute: ActivatedRoute, private entityService: EntitiesService) {
    const entityNameFromUrl = activatedRoute.snapshot.params.entity;
    const description = (this.entityService.getEntities().find(({ name }) => name === entityNameFromUrl) as AppEntity).description;


    this.entityName = entityNameFromUrl;
    this.description = description;
  }

  ngOnInit(): void {
  }

}
