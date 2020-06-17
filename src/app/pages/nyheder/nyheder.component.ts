import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nyheder',
  templateUrl: './nyheder.component.html',
  styleUrls: ['./nyheder.component.scss']
})
export class NyhederComponent implements OnInit {
  nyheder;
  constructor(private http: HttpService) {
    this.http.getNyheder().subscribe((res) => {
      this.nyheder = res;
      this.nyheder = this.nyheder.items;
    });

    setTimeout(() => {
      console.log(this.nyheder);
    }, 3000);
  }
  ngOnInit(): void {
  }

}
