import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from '../../../../models/toDo';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {EditToDoDialogComponent} from '../edit-to-do-dialog/edit-to-do-dialog.component';
import {ApiService} from '../../../api.service';
import {ReloadService} from '../../../reload.service';

@Component({
    selector: 'app-to-do-info-dialog',
    templateUrl: './to-do-info-dialog.component.html',
    styleUrls: ['./to-do-info-dialog.component.scss']
})
export class ToDoInfoDialogComponent implements OnInit {

    toDo: ToDo;
    date: Date;

    constructor(private api: ApiService,
                private dialogRef: MatDialogRef<ToDoInfoDialogComponent>,
                private dialog: MatDialog,
                private reloadService: ReloadService) {
    }

    ngOnInit() {
        this.date = this.parseToDate();
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
        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this.api.updateToDo(this.toDo.toDoId.uuid, response).subscribe(() => {
                    this.reloadService.refetchToDos();
                    this.api.fetchOneToDo(this.toDo.toDoId.uuid).subscribe(res => {
                        this.toDo = res;
                        this.date = this.parseToDate();
                    });
                });
            }
        });
    }

    delete() {
        this.api.deleteToDo(this.toDo.toDoId.uuid).subscribe(() => {
            this.reloadService.refetchToDos();
            this.dialogRef.close();
        });
    }
}
