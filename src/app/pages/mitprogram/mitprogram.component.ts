import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { HttpHeaders } from '@angular/common/http';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-mitprogram',
  templateUrl: './mitprogram.component.html',
  styleUrls: ['./mitprogram.component.scss']
})
export class MitprogramComponent implements OnInit {
program;
uid;
token;
days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];

  constructor(private http: HttpService) { }

  async ngOnInit()  {
    const onsdag = [];
    const torsdag = [];
    const fredag = [];
    const lørdag = [];
    const red = [];
    const blue = [];
    const green = [];
    const purple = [];
    this.uid = this.http.uid();
    this.token = this.http.token();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.program = await this.http.getProgram(this.uid, { headers }).toPromise();
       
    this.program.items.forEach(elm => {
      const day = new Date(elm.datetime).getDay();
      if (day === 3) onsdag.push(elm);
      if (day === 4) torsdag.push(elm);
      if (day === 5) fredag.push(elm);
      if (day === 6) lørdag.push(elm);
    });

    this.program = [{day: 'Onsdag', days: onsdag }, {day: 'Torsdag', days: torsdag, colors: blue}, {day: 'Fredag', days: fredag, colors: green}, {day: 'Lørdag', days: lørdag, colors: purple}];
    
    console.log(this.program);
  

    







  }

  whatDay(datetime: number) {
    const d = new Date(datetime);
    return `${this.days[d.getDay()]}`;
  }

  whatTime(datetime: number) {
    const d = new Date(datetime);
    return `${d.getHours()}:${(d.getMinutes() === 0) ? '00' : d.getMinutes()}`;
  }

  checkColor(color) {
    if (color === 'Rød scene') return 'red';
    if (color === 'Blå scene') return 'blue';
    if (color === 'Grøn scene') return 'green';
    if (color === 'Lilla scene') return 'purple';
  }

  async remove(eid, elm) { 
    elm.target.parentNode.remove();
    const removed = await this.http.remove(eid).toPromise();
    console.log(removed);
    
  }



}
