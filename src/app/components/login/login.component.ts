import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
  constructor( private fb: FormBuilder) {
    this.loading = false;
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:type
  sendForm() {
    const user = this.form.value.user.toLocaleLowerCase();
    const password = this.form.value.password.toLocaleLowerCase();
    if (user === 'juan' && password === 'qwerty'){
      this.loading = true;
    }
  }
}
