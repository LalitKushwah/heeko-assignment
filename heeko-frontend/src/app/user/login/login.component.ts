import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import toast from 'toast-me';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserDetails } from '../shared/models/user.model';
import constants from '../../utility/constants';
import { AuthService } from '../../../provider/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {
  CONSTANTS: any = constants;
  showPassword = false;
  loginForm: FormGroup;
  // userDetails: UserDetails;
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    // private storageService: StorageService
  ) {}

  ngOnInit(): void {
    console.log(this.CONSTANTS);
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      userLoginId: ['' , Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    this.authService.userLogin(this.loginForm.value).subscribe((responseData: any) => {
      if (responseData.status === 200) {
        this.loginForm.reset();
        toast(
          responseData.message,
          { duration: 3000 }
        );
      } else {
        toast(
          responseData.message,
          { duration: 3000 }
        );
      }
    }, err => {
      const status = err.status;
      toast(
        this.CONSTANTS.HTTP_STATUS_MESSAGE_MAP[status],
        { duration: 3000 }
      );
    });
  }

  createNewAccount(): void {
    toast('This functionality is not is scope of assignment', { duration: 3000 });
  }

  togglePasswordView(): void {
    this.showPassword = !this.showPassword;
  }
}
