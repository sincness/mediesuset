import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events;
  constructor(private http: HttpService) {
    this.http.getEvents().subscribe(res => {
      this.events = res;
      this.events = this.events.items;
    });
   }

  ngOnInit(): void {
  }

}
