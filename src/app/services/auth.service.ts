import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  username: string;
  password: string;
  access_token?: string;
  user_id?: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.getCookie('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(cred: object) {
    return this.http.post<any>('https://api.mediehuset.net/token', cred)
        .pipe(map(user => {
            // gemmer brugers oplysninger samt jwt token i localstorage for at holde brugeren logget ind imellem klientopdateringer af siden
            console.log(user.access_token);
            this.setCookie('token', user.access_token, 7);
            this.setCookie('user_id', user.user_id, 7);
            this.setCookie('user', JSON.stringify(user), 7);
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  logout() {
    // fjerner bruger's token fra localstorage for at logge ud
    this.setCookie('token', '', -7);
    this.setCookie('user_id', '', -7);
    this.setCookie('user', '', -7);
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  setCookie(name: string, value: string | number, expireDays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=/`;
  }

  getCookie(name: string): string {
    const nameLenPlus = (name.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }


}
