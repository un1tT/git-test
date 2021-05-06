import { Injectable } from '@angular/core';
import {AppEntities, AppEntity} from '../entity-list/entity-list.constant';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  constructor() { }
  entities = AppEntities;

  getEntities(): AppEntity[] {
    return this.entities;
  }

  addEntity(newEntity: AppEntity): void {
    this.entities = [...this.entities, newEntity];
  }
}
