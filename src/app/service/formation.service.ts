import { Injectable } from '@angular/core';
import { Formation } from '../model/formation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURLFormation } from '../config';
import { Observable } from 'rxjs';
import { AnneeAcademique } from '../model/annee-academique.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  formations: Formation[];
  constructor(private http: HttpClient) {}

  consulterFormation(id: number): Observable<Formation> {
    const url = `${apiURLFormation}/get/${id}`;
    return this.http.get<Formation>(url);
  }

  listeFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${apiURLFormation}/getall`);
  }

  ajouterFormation(f: Formation): Observable<Formation> {
    return this.http.post<Formation>(apiURLFormation + '/create', f, httpOptions);
  }

  modifierFormation(f: Formation): Observable<Formation> {
    return this.http.put<Formation>(apiURLFormation + '/update', f, httpOptions);
  }

  supprimerFormation(id: number) {
    const url = `${apiURLFormation}/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
