import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  private formstatus: string;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  async onlogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.pswd;
    if (email && password) {
         this._router.navigate(['admin-dashboard']);
    } else {
      this.formstatus = 'Cannot have Empty fields';
    }
  }

}
