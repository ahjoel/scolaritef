import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnneeAcademique } from '../model/annee-academique.model';
import { apiURLAnneeAcademique } from '../config';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AnneeAcademiqueService {
  annees: AnneeAcademique[];
  constructor(private http: HttpClient) {}

  consulterAnneeAcademique(id: number): Observable<AnneeAcademique> {
    const url = `${apiURLAnneeAcademique}/get/${id}`;
    return this.http.get<AnneeAcademique>(url);
  }

  listeAnneeAcademique(): Observable<AnneeAcademique[]> {
    return this.http.get<AnneeAcademique[]>(`${apiURLAnneeAcademique}/getall`);
  }

  ajouterAnneeAcademique(an: AnneeAcademique): Observable<AnneeAcademique> {
    return this.http.post<AnneeAcademique>(apiURLAnneeAcademique + '/create', an, httpOptions);
  }

  modifierAnneeAcademique(an: AnneeAcademique): Observable<AnneeAcademique> {
    return this.http.put<AnneeAcademique>(apiURLAnneeAcademique + '/update', an, httpOptions);
  }

  supprimerAnneeAcademique(id: number) {
    const url = `${apiURLAnneeAcademique}/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
