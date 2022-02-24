import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor( private fb: FormBuilder, private snackBar: MatSnackBar) {
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
  sendForm(): void {
    const user = this.form.value.user.toLocaleLowerCase();
    const password = this.form.value.password.toLocaleLowerCase();
    const type = this.form.value.type;
    if (user === 'juan' && password === 'qwerty' && type === 'astronaut'){
      this.loading = true;
    } else {
      this.error();
      this.form.reset();
    }
  }
  error(): void {
   this.snackBar.open('El usuario o contraseña incorrecta', 'ok', {
     duration: 5000,
     horizontalPosition: this.horizontalPosition,
     verticalPosition: this.verticalPosition
   });
  }
}
