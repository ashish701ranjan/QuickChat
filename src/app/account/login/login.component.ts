import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(formRef: NgForm) {
    if (formRef.value['username'] === "ashish" && formRef.value['password'] === "password") {
      this._router.navigate(['/']);
    }
  }

}
