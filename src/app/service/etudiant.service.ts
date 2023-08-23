import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant.model';
import { apiURLEtudiant } from '../config';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  etudiants: Etudiant[];
  constructor(private http: HttpClient) {}

  consulterEtudiant(id: number): Observable<Etudiant> {
    const url = `${apiURLEtudiant}/get/${id}`;
    return this.http.get<Etudiant>(url);
  }

  listeEtudiant(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${apiURLEtudiant}/getall`);
  }

  ajouterEtudiant(e: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(apiURLEtudiant + '/create', e, httpOptions);
  }

  modifierEtudiant(e: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(apiURLEtudiant + '/update', e, httpOptions);
  }

  supprimerEtudiant(id: number) {
    const url = `${apiURLEtudiant}/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
