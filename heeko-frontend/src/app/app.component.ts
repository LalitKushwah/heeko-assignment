import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import toast from 'toast-me';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserDetails } from '../shared/models/user.model';
// import { StorageService } from '../shared/services/storage.service';
import { AuthService } from '../provider/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
      console.log(responseData);
      if (responseData.status === 200) {
        this.loginForm.reset();
        toast(
          'Login Successful',
          { duration: 3000 }
        );
      } else {
        toast(
          'Invalid Credentials',
          { duration: 3000 }
        );
      }
    });
  }

  togglePasswordView(): void {
    this.showPassword = !this.showPassword;
  }
}
