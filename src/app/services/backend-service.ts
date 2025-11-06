import { Injectable } from '@angular/core';
import { Damage, Defence } from './monsters';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameCardAttributes } from './encounter-service';
import { EntityColumn, EntityDataSource, EntityImportData, EntityInfo, EntityPage } from './entity';

export class EntityDataSourceImpl implements EntityDataSource {

  constructor(private backend: BackendService, private info: EntityInfo) {

  }

  getColumns(): EntityColumn[] {
    return this.info.columns;
  }

  fetchRows(page: number, pageSize: number): Observable<EntityPage> {
    return this.backend.getEntities(this.info);
  }

  fetchRow(row: any): Observable<any> {
    return this.backend.getEntity(this.info, row.id);
  }

  addRow(): Observable<any> {
    return this.backend.createEntity(this.info, {});
  }

  deleteRow(entity: any): Observable<void> {
    return this.backend.deleteEntity(this.info, entity);
  }

  saveRow(entity: any): Observable<any> {
    return this.backend.updateEntity(this.info, entity);
  }

  importRow(importData: EntityImportData): Observable<EntityImportData> {
    return this.backend.createEntity(this.info, importData);
  }


}

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

export class PlayerAction {
  id!: number;
  characterClass?: string;
  data!: Action;

}
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  public static getBaseUrl() {
    return 'http://localhost:8090/api';
  }

  constructor(private http: HttpClient) { }

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
    return this.http.put<any>(BackendService.getBaseUrl() + info.path + '/' + entity.id, entity);
  }

  createEntity(info: EntityInfo, entity: any): Observable<any> {
    return this.http.post<any>(BackendService.getBaseUrl() + info.path, entity);
  }

  getActions(characterIds?: string): Observable<PlayerAction[]> {
    let params = new HttpParams();
    if (characterIds) {
      params = params.set('ids', characterIds);
    }

    return this.http.get<PlayerAction[]>(BackendService.getBaseUrl() + '/player-actions', {
      params: params
    });
  }
}
