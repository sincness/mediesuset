import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  online: boolean;
  menuOpen: boolean;
  constructor(private auth: AuthService) {
    this.online = this.auth.currentUserValue ? true : false;
   }

  ngOnInit(): void {
  }

  menu() {
    if (this.menuOpen) {
      this.get('#side-nav').style.width = '250px';
      // this.get('#main').style.marginLeft = '250px';
      this.get('#main-nav').style.marginLeft = '250px';
      this.get('footer').style.marginLeft = '250px';
      this.get('#main-nav > span').textContent = 'menu_open';
    } else if (!this.menuOpen) {
      this.get('#side-nav').style.width = '0';
      // this.get('#main').style.marginLeft = '0';
      this.get('footer').style.marginLeft = '0';
      this.get('#main-nav').style.marginLeft = '0';
      this.get('#main-nav > span').textContent = 'menu';
    }
  }

  // Query Selector smart get Funktion
  get(selector) {
    return document.querySelector(selector);
  }

  // routerLink funktion til mobile sidenav transition
  routerLink(url) {
    this.get('#side-nav').style.width = '0';
    // this.get('#main').style.marginLeft = '0';
    this.get('footer').style.marginLeft = '0';
    this.get('#main-nav').style.marginLeft = '0';
    this.get('#main-nav > span').textContent = 'menu';
    setTimeout(_ => {
      location.href = url;
    }, 500);
  }

}
