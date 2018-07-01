import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../servicioAutenticacion/autenticacion-service';

@Component({
  selector: 'menu-back-office-regional',
  templateUrl: './menu-back-office-regional.component.html',
  styleUrls: ['./menu-back-office-regional.component.css']
})
export class MenuBackOfficeRegionalComponent {
  isLoggedIn$: Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {
  }

  onLogout(){
    this.authService.logout();
  }

}
