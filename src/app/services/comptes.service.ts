import { Injectable } from '@angular/core';
import { ICompte } from '../domain/icompte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  URL = 'http://localhost:59873/api/Compte';

  constructor(private _http: HttpClient) { }

  getAllComptes(): Observable<ICompte[]> {
    return this._http.get<ICompte[]>(this.URL);
  }
}
