import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userName: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  register() {

  }
}
