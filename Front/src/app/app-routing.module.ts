import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReasignacionUniformesComponent } from './reasignacion-uniformes/reasignacion-uniformes.component';
import { ReporteUniformesComponent } from './reporte-uniformes/reporte-uniformes.component'
import { CascosComponent } from './cascos/cascos.component';
import { LoginComponent } from './login/login.component'; 
import { AuthGuard } from './servicioAutenticacion/AuthGuard'; 
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'reasignacion', component: ReasignacionUniformesComponent , canActivate: [AuthGuard] },
  { path: 'reporte', component: ReporteUniformesComponent , canActivate: [AuthGuard] },
  { path: 'cascos', component: CascosComponent , canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
