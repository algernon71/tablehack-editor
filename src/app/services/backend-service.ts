import { Injectable } from '@angular/core';
import { Damage, Defence } from './monsters';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameCardAttributes } from './encounter-service';
import { Entity, EntityColumn, EntityDataSource, EntityInfo, EntityPage } from './entity';
import { PlayerAction } from './entities';


export class Action {
  order?: number;
  count?: number = 1;
  initiative: string = "2";
  level?: string;
  title?: string;
  description?: string;
  targettingId?: number;

  steps: MonsterActionStep[] = [];
  attributes?: GameCardAttributes = new GameCardAttributes();
}


export class MonsterActionStep {
  name: string = "Move";
  type: string = "MOVE";
  description?: string;
  subtype?: string = "MOVE_WALK";
  range?: string;
  damage?: Damage;
  defence?: Defence;
  attributes?: string;
  body?: string;
  targettingId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  public static getBaseUrl() {
    return 'http://localhost:8090/api';
  }

  constructor(private http: HttpClient) {

  }

  getEntities(entity: EntityInfo, ids?: string): Observable<EntityPage> {
    let params = new HttpParams();
    if (ids) {
      params = params.set('ids', ids);
    }

    return this.http.get<EntityPage>(BackendService.getBaseUrl() + entity.path, {
      params: params
    });
  }

  getEntity(info: EntityInfo, id: string): Observable<any> {
    return this.http.get<any>(BackendService.getBaseUrl() + info.path + '/' + id);
  }

  deleteEntity(info: EntityInfo, entity: any): Observable<void> {
    return this.http.delete<void>(BackendService.getBaseUrl() + info.path + '/' + entity.id);
  }
  updateEntity(info: EntityInfo, entity: any): Observable<any> {
    console.info('updateEntity', entity, info);
    return this.http.put<any>(BackendService.getBaseUrl() + info.path + '/' + entity.id, entity);
  }

  createEntity(info: EntityInfo, entity: any): Observable<any> {
    return this.http.post<any>(BackendService.getBaseUrl() + info.path, entity);
  }

  createStandardAction(action: PlayerAction): Observable<any> {
    console.info('createStandardAction', action);
    return this.http.post<any>(BackendService.getBaseUrl() + '/player-actions', action);
  }

  getStandardActions(characterClass: string): Observable<PlayerAction[]> {
    return this.http.get<any>(BackendService.getBaseUrl() + '/player-actions/for-class/' + characterClass);
  }

  getAllStandardActions(): Observable<PlayerAction[]> {
    return this.http.get<PlayerAction[]>(BackendService.getBaseUrl() + '/player-actions/all');
  }
}
