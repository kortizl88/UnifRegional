import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBackOfficeRegionalComponent } from './menu-back-office-regional/menu-back-office-regional.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { ReasignacionUniformesComponent } from './reasignacion-uniformes/reasignacion-uniformes.component';
import { ReporteUniformesComponent } from './reporte-uniformes/reporte-uniformes.component';
import { CascosComponent } from './cascos/cascos.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './servicioAutenticacion/autenticacion-service';
import { AuthGuard } from './servicioAutenticacion/AuthGuard';
import { DialogoGeneralService, DialogSicronoComponent } from './dialogo/dialog-general-service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuBackOfficeRegionalComponent,
    ReasignacionUniformesComponent,
    ReporteUniformesComponent,
    CascosComponent,
    LoginComponent,
    DialogSicronoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [DialogSicronoComponent],
  providers: [AuthService, AuthGuard, DialogoGeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
