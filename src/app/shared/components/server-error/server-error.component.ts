import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-server-error',
  imports: [MatCard],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.scss',
})
export class ServerErrorComponent {

error? :any;
constructor(private router :Router){
const navigtion =this.router.getCurrentNavigation();
this.error=navigtion?.extras.state?.['error'];
}
}
