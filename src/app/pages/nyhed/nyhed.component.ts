import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: "app-nyhed",
  templateUrl: "./nyhed.component.html",
  styleUrls: ["./nyhed.component.scss"],
})
export class NyhedComponent implements OnInit {
  id = this.router.url.replace('/nyhed/', '');
  days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];

  nyhed;
    
  
  constructor(public router: Router, private http: HttpService) {
    this.http.getNyhed(this.id).subscribe((res) => {
      this.nyhed = res;
      this.nyhed = this.nyhed.item;
    });

    setTimeout(() => {
      console.log(this.nyhed);
    }, 3000);
  }

  ngOnInit(): void {}

  time(date: Date) {
    let d = new Date(date);
    return `${this.days[d.getDay()]} kl. ${d.getHours()}:${(d.getMinutes() === 0) ? '00' : '00'}`;
  }
}
