import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../provider/auth.service';
import toast from 'toast-me';
import constants from '../../utility/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  CONSTANTS: any = constants;
  showPassword = false;
  isPassMatched = true;

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.form = this.formBuilder.group({
      userLoginId: ['' , Validators.required],
      password: ['', Validators.required],
      confPassword: ['', Validators.required]
    });
  }

  resetPassword(): void {
    if (this.form.value.password === this.form.value.confPassword) {
      this.isPassMatched = true;
      this.authService.resetPassword(this.form.value).subscribe((responseData: any) => {
          this.form.reset();
          toast(responseData.message, { duration: 3000 });
          this.router.navigate(['login']);
      }, err => {
        const status = err.status;
        toast(this.CONSTANTS.HTTP_STATUS_MESSAGE_MAP[status], { duration: 3000 });
      });
    } else {
      this.isPassMatched = false;
    }
  }
}
