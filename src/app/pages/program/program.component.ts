import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { element } from 'protractor';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
  events;
  sortBy;
  selected = [];
  red = [];
  blue = [];
  green = [];
  purple = [];

  constructor(private http: HttpService) {
    if (this.sortBy === undefined) this.sortBy = 'Onsdag';
   }

  ngOnInit(): void {
    this.http.getEvents().subscribe(res => {
      this.events = res;
      this.events = this.events.items;
      this.events.forEach(event => {
        const day = this.whatDay(event.local_time);
        if (day === 'Onsdag') {
          this.selected.push(event);
        }
        
        
      });
      
    this.nestedForeachSwitch();
      

    });
  }

  filterBy(value: string) {
    this.sortBy = value;
    this.reset();

    this.events.forEach(event => {
      const day = this.whatDay(event.local_time);
      if (day === value) {
        this.selected.push(event);
      }


    });

    this.nestedForeachSwitch();

  }

  whatDay(datetime: number) {
    const d = new Date(datetime);
    return `${this.days[d.getDay()]}`;
  }

  whatTime(datetime: number) {
    const d = new Date(datetime);
    return `${d.getHours()}:${(d.getMinutes() === 0) ? '00' : '00'}`;
  }

  reset() {
    const elements = document.querySelectorAll('[data-day]');
    elements.forEach(elem => elem.remove());
    this.red = [];
    this.blue = [];
    this.green = [];
    this.purple = [];
  }

  nestedForeachSwitch() {
    this.selected.forEach(event => {

      switch (event.stage_name) {
        case 'Rød scene':
          this.red.push(event);
          break;
        case 'Blå scene':
          this.blue.push(event);
          break;
        case 'Grøn scene':
          this.green.push(event);
          break;
        case 'Lilla scene':
          this.purple.push(event);
          break;
      }
    });
  }

  add(eventid: number) {
    this.http.add(eventid);
  }
  

}
