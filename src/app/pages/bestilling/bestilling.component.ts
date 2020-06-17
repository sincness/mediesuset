import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bestilling',
  templateUrl: './bestilling.component.html',
  styleUrls: ['./bestilling.component.scss']
})
export class BestillingComponent implements OnInit {
  id = this.router.url.replace('/bestilling/', '');
  billet;
  price;

  order: FormGroup;
    
  
  constructor(public router: Router, private http: HttpService, private fb: FormBuilder) {
    this.http.getTicket(this.id).subscribe(res => {
      this.billet = res;
      this.billet = this.billet.item;
      this.price = this.billet.price;
      console.log(this.billet);
      
    });
   }

  ngOnInit(): void {
    this.order = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeat: ['', Validators.required],
    });
  }


  amplify(value: string) {
    let x = this.numbify(value);
    (x <= 0) ? x = 0 : x;
    this.price = parseInt(this.billet.price, 10)*x;
    document.getElementById('price').textContent = this.price + ' DKK';
    document.getElementById('total').textContent = this.price + ' DKK';
  }

  numbify(string) {
    return +string;
  }

}
