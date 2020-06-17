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

  postProgram(data, headers) {
    return this.http.post(`https://api.mediehuser.net/mediesuset/programme`, data, headers);
  }

  add(eid: number) {
    const uid = this.auth.getCookie('user_id');
    const token = this.auth.getCookie('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const formData: any = new FormData();
    formData.append('user_id', uid);
    formData.append('event_id', eid);
    console.log(uid + token);
    
    console.dir(formData);
    this.postProgram(formData, { headers }).subscribe(res => {
      console.log(res);
    });
  }
}
