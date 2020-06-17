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

    setTimeout(() => {
      console.log(this.event);
    }, 3000);
   }
  ngOnInit(): void {
  }

}
