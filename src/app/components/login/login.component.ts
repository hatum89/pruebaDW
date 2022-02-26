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
  }
  // tslint:disable-next-line:type
  sendForm(): void {
    this.userService.getUsers()
      .subscribe((userDataInfo: any) => {
        this.user = userDataInfo.usersData;
        const user = this.form.value.user.toLocaleLowerCase();
        const password = this.form.value.password.toLocaleLowerCase();
        const type = this.form.value.userType;
        const userFilter = this.user.filter((userFilterData) => {
          return  userFilterData.name === user && userFilterData.userType === type;
        });
        if (!userFilter.length) {
          this.error();
          this.form.reset();
        }
        else {
          const token = userFilter[0].token;
          if (user === userFilter[0].name && password === userFilter[0].password && type === userFilter[0].userType){
            this.loading = true;
            localStorage.setItem('type', this.form.value.userType);
            localStorage.setItem('token', (token).toString());
            setTimeout(() => {
              if (userFilter[0].userType === 'astronaut'){
                this.router.navigateByUrl(`/admin/${this.form.value.userType}`)
                  .then();
              } else {
                this.router.navigateByUrl(`/admin/${this.form.value.userType}`)
                  .then();
              }
            }, 2000);
          }
        }
      });
  }
  error(): void {
   this.snackBar.open('El usuario o contraseña incorrecta', 'ok', {
     duration: 5000,
     horizontalPosition: this.horizontalPosition,
     verticalPosition: this.verticalPosition
   });
  }
}
