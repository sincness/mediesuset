import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.scss']
})
export class CampsComponent implements OnInit {
  camps;
  soldTickets;
  soldTicketsOne;
  soldTicketsTwo;
  soldTicketsThree;
  constructor(private http: HttpService) {
    this.http.getCamps().subscribe((res) => {
      this.camps = res;
      this.camps = this.camps.items;
      
    });

   }

  async ngOnInit() {
    this.soldTicketsOne = await this.http.getTicketsSold('1').toPromise();
    this.soldTicketsTwo = await this.http.getTicketsSold('2').toPromise();
    this.soldTicketsThree = await this.http.getTicketsSold('3').toPromise();
    this.soldTickets = [this.soldTicketsOne, this.soldTicketsTwo, this.soldTicketsThree];
  }

}
