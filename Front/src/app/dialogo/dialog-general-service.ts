import { Component, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Injectable()
export class DialogoGeneralService {

    private dialogRefSicrono: MatDialogRef<DialogSicronoComponent>;

    constructor(public dialog: MatDialog) { }

    public iniciarEspera(): MatDialogRef<DialogSicronoComponent> {
       let dialogRefSicrono = this.dialog.open(DialogSicronoComponent, { disableClose: false, width:'15', panelClass: 'dialog-sincrono-transparente' });
       return dialogRefSicrono;
    }

    public cerrarEspera(dial: MatDialogRef<DialogSicronoComponent>): void {
        dial.close();
    }
}

@Component({
    selector: 'dialog-sincrono-component',
    templateUrl: 'dialog-sincrono-component.html',
    styleUrls: ['dialog-general-service.css']

})
export class DialogSicronoComponent {
    constructor(public dialogRef: MatDialogRef<DialogSicronoComponent>) { }
}