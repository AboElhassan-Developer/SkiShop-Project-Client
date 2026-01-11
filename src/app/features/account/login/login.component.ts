import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../core/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCard } from "@angular/material/card";
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from "@angular/material/input";
import { MatAnchor } from "@angular/material/button";
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-login',
  imports: [MatCard,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatAnchor,
    MatButton, MatError],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
private fb = inject(FormBuilder);
private accountService =inject(AccountService);
private router =inject (Router);
private activatedRoute = inject(ActivatedRoute);

returnUrl = '/shop';

constructor(){
  const url=this.activatedRoute.snapshot.queryParams['returnUrl'];
  if(url) this.returnUrl=url;
}

 loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

onSubmit(){
  if (this.loginForm.valid) {
  this.accountService.login(this.loginForm.value).subscribe({
    next: ()=>{
      this.accountService.getUserInfo().subscribe();
      this.router.navigateByUrl(this.returnUrl);
    }
  })
}
}
}
