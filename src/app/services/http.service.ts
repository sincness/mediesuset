import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getNyheder() {
    return this.http.get('https://api.mediehuset.net/mediesuset/news');
  }

  getNyhed(id: string) {
    return this.http.get(`https://api.mediehuset.net/mediesuset/news/${id}`);
  }

  getEvents() {
    return this.http.get('https://api.mediehuset.net/mediesuset/events');
  }

  getEvent(id: string) {
    return this.http.get(`https://api.mediehuset.net/mediesuset/events/${id}`);
  }

  getCamps() {
    return this.http.get('https://api.mediehuset.net/mediesuset/camps');
  }

  getCamp(id: string) {
    return this.http.get(`https://api.mediehuset.net/mediesuset/camps/${id}`);
  }

  getTickets() {
    return this.http.get('https://api.mediehuset.net/mediesuset/tickets');
  }

  getTicket(id: string) {
    return this.http.get(`https://api.mediehuset.net/mediesuset/tickets/${id}`);
  }

  getScenes() {
    return this.http.get('https://api.mediehuset.net/mediesuset/stages');
  }

  getScene(id: string) {
    return this.http.get(`https://api.mediehuset.net/mediesuset/stages/${id}`);
  }

  getProgram(id, headers) {
    return this.http.get(`https://api.mediehuset.net/mediesuset/programme/${id}`, headers);
  }

  postProgram(data, headers) {
    return this.http.post(`https://api.mediehuset.net/mediesuset/programme`, data, headers);
  }

  remove(eid: string) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.auth.getCookie('token')}`);
    return this.http.delete(`https://api.mediehuset.net/mediesuset/programme/${eid}`, { headers: header } );
  }

  add(eid: string) {
    const uid = this.uid();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.auth.getCookie('token')}`);
    const data = new FormData();
    data.append('user_id', uid);
    data.append('event_id', eid);

    this.postProgram(data, { headers }).subscribe(res => {
      console.log(res);
      // Lav error handling på om res.status er true
    });
  }

  uid() {
    return this.auth.currentUserValue.user_id;
  }

  token() {
    return this.auth.currentUserValue.access_token;
  }
}
