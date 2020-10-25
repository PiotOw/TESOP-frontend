import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from '../../../../models/toDo';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {EditToDoDialogComponent} from '../edit-to-do-dialog/edit-to-do-dialog.component';

@Component({
    selector: 'app-to-do-info-dialog',
    templateUrl: './to-do-info-dialog.component.html',
    styleUrls: ['./to-do-info-dialog.component.scss']
})
export class ToDoInfoDialogComponent implements OnInit {

    toDo: ToDo;
    date: Date;

    constructor(private dialogRef: MatDialogRef<ToDoInfoDialogComponent>,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        this.date = this.parseToDate();
        console.log(this.toDo);
    }

    parseToDate() {
        return new Date(this.toDo.deadline);
    }

    close() {
        this.dialogRef.close();
    }

    edit() {
        let dialogRef: MatDialogRef<EditToDoDialogComponent, any>;
        dialogRef = this.dialog.open(EditToDoDialogComponent, {data: this.toDo});
        dialogRef.afterClosed();

    }
}
