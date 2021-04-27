import { Injectable } from '@angular/core';
import { AppEntity } from '../entity-list/entity-list.constant';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  constructor() { }

  getEntities(): AppEntity[] {
    return Object.values(AppEntity);
  }
}
