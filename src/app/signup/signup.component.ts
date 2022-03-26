import { Component, OnInit } from '@angular/core';
import {SignupModel} from "./models/signup.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  model = new SignupModel('', '')

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

}
