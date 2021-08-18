import { HttpClient } from '@angular/common/http';
import { IEntity } from '../models/ientity';
import { environment } from './../../../environments/environment';

export abstract class BaseRepository<TResponse> {
  constructor(private httpClient: HttpClient, private path: string) {}

  create(entity: IEntity): Promise<TResponse> {
    return this.httpClient
      .post<TResponse>(`${environment.api}${this.path}`, entity)
      .toPromise();
  }
}
