import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatAnchor],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
    dialogRef =inject(MatDialogRef<ConfirmationDialogComponent>);
    data =inject(MAT_DIALOG_DATA);
    
    onConfirm(){
      this.dialogRef.close(true);
    }

    onCancel(){
      this.dialogRef.close();
    }
}
