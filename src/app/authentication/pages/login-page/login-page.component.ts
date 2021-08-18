import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConfirmationService } from '@core/services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form = this.formBuild.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  showPassword = false;

  constructor(
    private formBuild: FormBuilder,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form.value);
    this.confirmation
      .confirmDelete('1 - Nome do item')
      .subscribe((confirmed) => {
        console.log('Usuário confirmou?', confirmed);
      });
  }

  handleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
