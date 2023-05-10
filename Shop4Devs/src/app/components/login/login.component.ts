import { Component, OnInit } from '@angular/core';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoading!: boolean;

  faUser = faUser
  faEnvelope = faEnvelope
  faKey = faKey

  constructor() {}

  ngOnInit() {}

  submitLogin() {}

  public loading(): boolean{
    this.isLoading = true;
    return true;
  }

}
