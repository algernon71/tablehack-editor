import { Injectable } from '@angular/core';
import { BackendService } from './backend-service';
import { charactersEntity, equipmentEntity, monsterEntity, playerActionsEntity } from './entities';
import { Entity, EntityColumn, EntityDataSource, EntityInfo, EntityPage } from './entity';
import { Observable } from 'rxjs';


export class EntityDataSourceImpl implements EntityDataSource {

  constructor(private backend: BackendService, private info: EntityInfo) {

  }

  getTypeId(): string {
    return this.info.typeId;
  }

  getInfo(): EntityInfo {
    return this.info;
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
    console.info('saveRow', entity);
    return this.backend.updateEntity(this.info, entity);
  }

  importRow(importData: Entity): Observable<Entity> {
    return this.backend.createEntity(this.info, importData);
  }
}

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  entities: EntityInfo[] = [];
  datasourceMap = new Map<string, EntityDataSource>();

  constructor(private backendService: BackendService) {
    this.initDataSources();
  }

  getEntities(): EntityInfo[] {
    return this.entities;
  }

  getDataSource(entityName: string): EntityDataSource | undefined {
    return this.datasourceMap.get(entityName);
  }


  private initDataSources() {
    this.addDataSource(monsterEntity);
    this.addDataSource(charactersEntity);
    this.addDataSource(equipmentEntity);
    this.addDataSource(playerActionsEntity);

  }

  private addDataSource(info: EntityInfo) {
    const ds = new EntityDataSourceImpl(this.backendService, info);
    this.datasourceMap.set(info.typeId, ds);
    this.entities.push(info);
  }



}
