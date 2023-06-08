import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ScratchMeComponent} from "angular-scratch-me-test";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  title = 'angular-tour-of-heroes';
  isVisible = true

  onButtonClick() {
    if (this.isVisible) {
      const dialogRef = this.dialog.open(ScratchMeComponent, {data: {description: "Hello World"}});

      this.isVisible = false

      dialogRef.afterClosed().subscribe(() => {
        this.isVisible = true
      });
    }
  }
}
