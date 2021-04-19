import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  private readonly entities: string[] = ['User', 'Picture', 'Cell', 'Working Area'];

  constructor() { }

  getEntities(): string[] {
    return this.entities;
  }
}
