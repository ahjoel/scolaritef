import { Injectable } from '@angular/core';
import { Payement } from '../model/payement.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURLPayement } from '../config';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class PayementService {
  payements: Payement[];
  constructor(private http: HttpClient) {}

  consulterPayement(id: number): Observable<Payement> {
    const url = `${apiURLPayement}/get/${id}`;
    return this.http.get<Payement>(url);
  }

  listePayement(): Observable<Payement[]> {
    return this.http.get<Payement[]>(`${apiURLPayement}/getall`);
  }

  ajouterPayement(p: Payement): Observable<Payement> {
    return this.http.post<Payement>(apiURLPayement + '/create', p, httpOptions);
  }

  modifierPayement(p: Payement): Observable<Payement> {
    return this.http.put<Payement>(apiURLPayement + '/update', p, httpOptions);
  }

  supprimerPayement(id: number) {
    const url = `${apiURLPayement}/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }

  montantDejaRegle(id: number): Observable<number>{
    const url = `${apiURLPayement}/etudiant/mtregle/${id}`;
    return this.http.get<number>(url, httpOptions);
  }
}
