import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mediesuset';
  menuOpen: boolean;

  menu() {
    if (this.menuOpen) {
      this.get('#side-nav').style.width = '250px';
      this.get('#main').style.marginLeft = '250px';
      this.get('#main-nav').style.marginLeft = '250px';
      this.get('footer').style.marginLeft = '250px';
      this.get('#main-nav > span').textContent = 'menu_open';
    } else if (!this.menuOpen) {
      this.get('#side-nav').style.width = '0';
      this.get('#main').style.marginLeft = '0';
      this.get('footer').style.marginLeft = '0';
      this.get('#main-nav').style.marginLeft = '0';
      this.get('#main-nav > span').textContent = 'menu';
    }
  }

  // Query Selector smart get Funktion
  get(selector) {
    return document.querySelector(selector);
  }

  anim() {
    this.get('#side-nav').style.width = '0';
    this.get('#main').style.marginLeft = '0';
    this.get('#main-nav').style.marginLeft = '0';
    this.get('footer').style.marginLeft = '0';
    this.get('#main-nav > span').textContent = 'menu';
  }
}
