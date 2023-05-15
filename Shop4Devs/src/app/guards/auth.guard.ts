import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  private admin$!: boolean;

  constructor(private auth: AuthService) { }

  
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Promise<boolean>{
    
    try {
      const isAdmin = await this.auth.checkAdminAccess();
      if (isAdmin)
        return true;
      else
        return false;
      
    } catch (error) {
        console.error('Erro na verificação do status de administrador:', error);
        return false;
    }
    
  }

}
