import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {

  data;

  selected;

  constructor(private http: HttpService) { 
    this.http.getEvents().subscribe(res => {
      this.data = res;
      this.data = this.data.items;
    })
    if (this.selected === undefined) {
      this.selected = 'All';
    }
  }

  ngOnInit(): void {
  }

  filterBy(value: string, elm) {
    this.selected = value;
    const buttons = document.getElementsByTagName('button') as unknown as NodeListOf<HTMLElement>;
    const btnElem = elm.target as HTMLElement;
    this.clearArticles();
    switch (value) {
      case 'All':
        this.all();
        break;
      case 'Rød scene':
        this.red();
        break;
      case 'Blå scene':
        this.blue();
        break;
      case 'Grøn scene':
      this.green();
        break;
      case 'Lilla scene':
        this.purple();
        break;
    }

  }

  time(date: Date) {
  const d = new Date(date);
  const days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
  
    return `${days[d.getDay()]} kl. ${d.getHours()}:${(d.getMinutes() === 0) ? '00' : d.getMinutes()}`;
  }

  clearArticles() {
    const articles = document.querySelectorAll('[data-scene]');
    articles.forEach(article => {
      if (article.className !== 'hidden') article.className += 'hidden';
    })
  }

  all() {
    const articles = document.querySelectorAll('[data-scene]');
    articles.forEach(article => {
      if (article.className === 'hidden') article.className = '';
    })
  }

  red() {
    const red: NodeListOf<Element> = document.querySelectorAll('[data-scene="Rød scene"]');
    red.forEach(elem => {
      elem.className = '';
    })
  }
  blue() {
    const blue: NodeListOf<Element> = document.querySelectorAll('[data-scene="Blå scene"]');
    blue.forEach(elem => {
      elem.className = '';
    })
  }
  green() {
    const green: NodeListOf<Element> = document.querySelectorAll('[data-scene="Grøn scene"]');
    green.forEach(elem => {
      elem.className = '';
    })
  }
  purple() {
    const purple: NodeListOf<Element> = document.querySelectorAll('[data-scene="Lilla scene"]');
    purple.forEach(elem => {
      elem.className = '';
    })
  }

}
