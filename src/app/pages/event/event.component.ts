import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  id = this.router.url.replace('/event/', '');
  event;
  constructor(private http: HttpService, public router: Router) {
    this.http.getEvent(this.id).subscribe((res) => {
      this.event = res;
      this.event = this.event.item;
    });
   }
  ngOnInit(): void {
  }

  time(date: Date) {
    const d = new Date(date);
    const days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    return `${days[d.getDay()]} kl. ${d.getHours()}:${(d.getMinutes() === 0) ? '00' : d.getMinutes()}`;
    }

}
