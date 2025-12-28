import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../core/services/account.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { last } from 'rxjs';
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatCard } from "@angular/material/card";
import { JsonPipe } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatAnchor } from '@angular/material/button';
import { TextInputComponent } from "../../../shared/components/text-input/text-input.component";

@Component({
  selector: 'app-register',
  imports: [MatFormField, MatLabel, MatInput, MatAnchor, MatCard, ReactiveFormsModule, JsonPipe, MatError, TextInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
private fb =inject(FormBuilder);
private accountService=inject(AccountService);
private router =inject(Router);
private snack=inject(SnackbarService)

validtionErrors?: string[];

registerForm= this.fb.group({
firstName: ['',Validators.required],
lastName: ['',Validators.required],
email:['',[Validators.required,Validators.email]],
password:['',Validators.required],

});
onSubmit(){
  this.accountService.register(this.registerForm.value).subscribe({
    next: () => {
      this.snack.success('Registration Successful - you can now login');
      this.router.navigateByUrl('/account/login');
    },
    error:errors => this.validtionErrors =errors
  })
}



}
