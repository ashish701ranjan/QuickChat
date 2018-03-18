import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _cookieService: CookieService) { }

  ngOnInit() {
  }

  onSubmit(formRef: NgForm) {
    if (formRef.value['username'] === "ashish" && formRef.value['password'] === "password") {
      this._cookieService.set('loginActive', 'true',null,null,null, true)
      this._router.navigate(['contacts']);
    }
  }

}
