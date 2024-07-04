import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteComponent>) {}
  dataSource = new MatTableDataSource<any>([]);
  listData: any[] = [];

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
    this.dataSource.data = this.listData;
  }
}
