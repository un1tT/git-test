import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppEntity} from "../entity-list/entity-list.constant";

@Component({
  selector: 'app-entity-description',
  templateUrl: './entity-description.component.html',
  styleUrls: ['./entity-description.component.scss']
})
export class EntityDescriptionComponent implements OnInit {
  readonly entity: AppEntity;
  readonly description: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
    const entityFromUrl = activatedRoute.snapshot.params['entity'];

    switch (entityFromUrl) {
      case AppEntity.User: {
        this.description = 'User has a login/password pair as authentication data.';
        break;
      }
      case AppEntity.WorkingArea: {
        this.description = 'Each user can configure his/her interface: change color theme, enable color blindness mode. This config is called working area.';
        break;
      }
      case AppEntity.Picture: {
        this.description = 'The main purpose of the app is coloring pictures, so this entity is an array of colored cells.';
        break;
      }
      case AppEntity.Cell: {
        this.description = 'This entity is a building block for pictures.';
        break;
      }
    }

    this.entity = entityFromUrl;
  }

  ngOnInit(): void {
  }

}
