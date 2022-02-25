import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {UserInterface} from '../../../interfaces/user-interface';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
  user: UserInterface[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor( private fb: FormBuilder,
               private snackBar: MatSnackBar,
               private router: Router,
               private userService: UserService) {
    this.loading = false;
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((user: UserInterface[]) => {
       this.user = user;
       console.log(this.user);
    });

  }
  // tslint:disable-next-line:type
  sendForm(): void {
    const user = this.form.value.user.toLocaleLowerCase();
    const password = this.form.value.password.toLocaleLowerCase();
    const type = this.form.value.userType;
    if (user === 'juan' && password === 'qwerty' && type === 'astronaut'){
      this.loading = true;
      localStorage.setItem('type', this.form.value.userType);
      setTimeout(() => {
        this.router.navigateByUrl(`/admin/${this.form.value.userType}`)
          .then();
        return;
      }, 2000);
    }
    else if (user === 'juan' && password === 'qwerty' && type === 'passenger'){
      this.loading = true;
      localStorage.setItem('type', this.form.value.userType);
      setTimeout(() => {
        this.router.navigateByUrl(`/admin/${this.form.value.userType}`)
          .then();
        return;
      }, 2000);
    }
    else {
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
