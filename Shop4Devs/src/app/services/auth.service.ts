import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = environment.baseURL;
  }

  async checkAdminAccess() : Promise<boolean>{
    const result = await this.http.get<boolean>(`${this.apiURL}/Auth/admin`).toPromise();
    return !!result;
  }

}
