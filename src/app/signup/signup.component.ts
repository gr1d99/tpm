import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SignupModel} from "../models/signup.model";
import {SignupUserService} from "../services/signup-user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  model = new SignupModel('', '')

  constructor(
    private service: SignupUserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
      .signup(this.model)
      .subscribe(
        () => {
          this.router.navigate([''])
        },
        error => {
        },
        () => {
        })
  }
}
