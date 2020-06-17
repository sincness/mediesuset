import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-billetter',
  templateUrl: './billetter.component.html',
  styleUrls: ['./billetter.component.scss']
})
export class BilletterComponent implements OnInit {


  billetter;
  enkelt: any[] = [];
  partout: any[] = [];

  constructor(private http: HttpService) {
    this.http.getTickets().subscribe(res => {
      this.billetter = res;
      this.billetter = this.billetter.items;
      this.billetter.forEach(billet => {
        let split = billet.name.split(' ');
        console.log(split[0]);
        if (split[0] !== 'Enkeltbillet') {
          this.partout.push(billet);
        } else {
          this.enkelt.push(billet);
        }
      });
    });
    setTimeout(() => {
      
      console.log(this.enkelt);
      console.log(this.partout);
      this.adjustPrice('600.00');
    }, 1000);
   }

  ngOnInit(): void { }


  adjustPrice(price: string) {
    let adjusted = price.split('.');
    return `${adjusted[0]} DKK`;
  }

 
}
