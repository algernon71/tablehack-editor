import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

export class ConfirmationData {
  title!: string;
  description!: string;

}
@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss'
})
export class ConfirmationDialog {
  data: ConfirmationData = inject(DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ConfirmationDialog>);

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }


  public static confirm(dlg: MatDialog, title: string, description: string, callback: (confirmed: boolean) => void) {
    const dialog = dlg.open(ConfirmationDialog,
      {
        hasBackdrop: false,
        data: {
          title: title,
          description: description
        }
      });
    dialog.afterClosed().subscribe(result => {
      callback(result);
    });

  }

  close(result: boolean) {
    this.dialogRef.close(result);
  }
}
