import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IUserRel } from 'app/shared/model/user-rel.model';

type EntityResponseType = HttpResponse<IUserRel>;
type EntityArrayResponseType = HttpResponse<IUserRel[]>;

@Injectable({ providedIn: 'root' })
export class UserRelService {
  public resourceUrl = SERVER_API_URL + 'api/user-rels';

  constructor(protected http: HttpClient) {}

  create(userRel: IUserRel): Observable<EntityResponseType> {
    return this.http.post<IUserRel>(this.resourceUrl, userRel, { observe: 'response' });
  }

  update(userRel: IUserRel): Observable<EntityResponseType> {
    return this.http.put<IUserRel>(this.resourceUrl, userRel, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUserRel>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUserRel[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
