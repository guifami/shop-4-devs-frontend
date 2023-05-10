import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public isLoading!: boolean;

  faUser = faUser
  faEnvelope = faEnvelope
  faKey = faKey

  constructor() {}

  ngOnInit() {}

  submitRegister() {}

  public loading(): boolean{
    this.isLoading = true;
    return true;
  }
}
