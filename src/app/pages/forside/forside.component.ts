import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-forside",
  templateUrl: "./forside.component.html",
  styleUrls: ["./forside.component.scss"],
})
export class ForsideComponent implements OnInit {
  nyheder;
  constructor(private http: HttpService) {

  }

  async ngOnInit() {
    // Her indhentes et Promise, det vil sige ett nutidsbillede af de værdier der er da kaldet finder sted
    // afviklet igennem en asynkron funktion med et await
    this.nyheder = await this.http.getNyheder().toPromise();
    this.nyheder = this.nyheder.items;

    // Det kunne også har været gjort på denne måde med en subscribe
    // this.http.getNyheder().subscribe((res) => {
    //   this.nyheder = res;
    //   this.nyheder = this.nyheder.items;
    // });
  }
}
