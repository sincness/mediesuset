import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required]
    });
  }

  submit() {
    const data = new FormData;
    data.append('email', this.form.get('email').value);
    this.http.postNewsletter(data).subscribe(res => {
      console.log(res);

      // Error handling på status om den er true eller falsey


    });
  }

}
