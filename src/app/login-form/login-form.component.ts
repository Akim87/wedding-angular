import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() onCancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();

  constructor(private loginService: LoginService) { }

  public loginForm: FormGroup;
  public isSubmitSuccess: boolean = false;
  public isSubmitFailed: boolean = false;
  public subscription;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  closePopup(): void {
    this.onCancel.emit(false);
  }

  loginSubmit() {
    this.subscription = this.loginService.sendData(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(res => {
          localStorage.setItem('accessToken', res.access_token);
          this.onSubmit.emit();
          this.isSubmitSuccess = true;
          setTimeout(() => this.closePopup(), 3000)
        },
        error => {
          console.log(error.message);
        });
  }
}
