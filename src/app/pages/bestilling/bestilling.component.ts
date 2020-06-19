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
    });
   }

  ngOnInit(): void {
    this.order = this.fb.group({
      antal: ['', Validators.required],
      camppladser: ['', Validators.required],
      camp: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeat: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      postnumber: ['', Validators.required],
      city: ['', Validators.required],
      radio: ['', Validators.required],
    });
  }

  // getter funktion

  get f() {
    return this.order.controls;
  }

  buy() {
    const data = new FormData;
    data.append('quantity', this.order.get('antal').value);
    data.append('camp_id', this.order.get('camp').value);
    data.append('email', this.order.get('username').value);
    data.append('password', this.order.get('password').value);
    data.append('name', this.order.get('name').value);
    data.append('address', this.order.get('address').value);
    data.append('zipcode', this.order.get('postnumber').value);
    data.append('city', this.order.get('city').value);
    data.append('type', this.order.get('radio').value);
    data.append('ticket_id', this.id);
    this.http.postBillet(data).subscribe(res => {
      console.log(res);

      // Error handling på status om den er true eller falsey


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
