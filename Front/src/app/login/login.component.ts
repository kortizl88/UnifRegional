import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../servicioAutenticacion/autenticacion-service";
import { DialogoGeneralService } from '../dialogo/dialog-general-service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    
  private formSubmitAttempt: boolean;
  public dialogGeneral: DialogoGeneralService;

  constructor(private fb: FormBuilder, private authService: AuthService, public dialog: MatDialog) {
    this.dialogGeneral = new DialogoGeneralService(this.dialog);
   }

  ngOnInit() {
    this.form = this.fb.group({  
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  public ingreso():void{
    if (this.form.valid) {
      this.dialogGeneral.iniciarEspera();
      this.authService.login(this.form.value); 
    }
    this.formSubmitAttempt = true;            
  }

}
