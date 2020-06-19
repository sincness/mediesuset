import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {
  camp;
  open;
  soldTickets: any;
  id = this.router.url.replace('/camp/', '');

  constructor(private http: HttpService, private router: Router) { }


  async ngOnInit() {
    this.camp = await this.http.getCamp(this.id).toPromise();
    this.open = this.pullElement(this.camp.item.facilities, 8);
    this.removeElement(this.camp.item.facilities, 8);
    this.camp = this.camp.item;
    this.soldTickets = await this.http.getTicketsSold(this.id).toPromise();
    this.soldTickets = this.soldTickets.num_tickets_sold;

  }

  removeElement(array, i) {
    (array.findIndex(obj => +obj.id === i) !== 0) ? array.splice(array.findIndex(obj => +obj.id === i)) : array.shift();
  }

  pullElement(array, i) {
    return array[array.findIndex(obj => +obj.id === i)];
  }
}
