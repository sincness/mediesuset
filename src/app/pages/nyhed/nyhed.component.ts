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

  time(datetime) {
    const d = new Date(+datetime);
    const days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    const m = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];
    return `${days[d.getDay()]} d. ${d.getDate()}. ${m[d.getMonth()]} kl. ${(d.getHours() <= 9) ? `0${d.getHours()}` : d.getHours()}:${(d.getMinutes() === 0) ? '00' : d.getMinutes()}`;
  }


  // time(datetime) {
  //   let d = new Date(date);
  //   return `${this.days[d.getDay()]} kl. ${d.getHours()}:${(d.getMinutes() === 0) ? '00' : d.getMinutes()}`;
  // }
  
}
