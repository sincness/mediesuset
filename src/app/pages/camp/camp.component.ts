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
  id = this.router.url.replace('/camp/', '');

  constructor(private http: HttpService, private router: Router) {
    this.http.getCamp(this.id).subscribe(res => {
      this.camp = res;
      this.camp = this.camp.item;
      // this.open = this.camp.facilities.map(item => {
      //   if (item.id === '8') {
      //     console.log(item);
      //     // this.open.push(item);
      //   } 
      // });
    });

    setTimeout(() => {
      console.log(this.open);
    }, 3000);

    // this.camp.facilities.filter(item => item.id === 8 ? this.open = item : this.open = undefined);
    // this.open = this.camp.facilities.filter(facility => facility.id === 8);


   }


  ngOnInit(): void {
  }

  // removeIndex = (array) => array.map(function(item) { return item.id; }).indexOf(8);

}
