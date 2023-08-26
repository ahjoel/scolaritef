import { Injectable } from '@angular/core';
import { Notification } from '../model/notification.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from '../config';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: Notification[];
  constructor(private http: HttpClient) {}

  envoiMail(n: Notification): Observable<Notification> {
    return this.http.post<Notification>(apiURL + '/sendMail', n, httpOptions);
  }

}
