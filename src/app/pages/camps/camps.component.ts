import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.scss']
})
export class CampsComponent implements OnInit {
  camps;
  constructor(private http: HttpService) {
    this.http.getCamps().subscribe((res) => {
      this.camps = res;
      this.camps = this.camps.items;
    });

    setTimeout(() => {
      console.log(this.camps);
    }, 3000);
   }

  ngOnInit(): void {
  }

}
