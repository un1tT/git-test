import {Injectable} from '@angular/core';
import {AppEntities, AppEntity} from '../entity-list/entity-list.constant';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  private entities: AppEntity[] = AppEntities;
  entitiesObserver = {
    next: (entity: AppEntity) => this.entities = [...this.entities, entity]
  };

  getEntities(): AppEntity[] {
    return this.entities;
  }
}
