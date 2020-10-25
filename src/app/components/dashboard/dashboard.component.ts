import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ToDoStatus} from '../../../mocks/mock-status';
import {ApiService} from '../../api.service';
import {ToDo} from '../../../models/toDo';
import {MatDialog} from '@angular/material';
import {MessageDialogComponent} from '../message-dialog/message-dialog.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    TODOS: ToDo[];

    STATUSES = [
        {
            status: ToDoStatus.OPEN,
            name: 'OPEN'
        },
        {
            status: ToDoStatus.IN_PROGRESS,
            name: 'IN PROGRESS'
        },
        {
            status: ToDoStatus.DONE,
            name: 'DONE'
        },
        {
            status: ToDoStatus.IGNORED,
            name: 'IGNORED'
        }
    ];


    constructor(private api: ApiService,
                private cdRef: ChangeDetectorRef,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        const dialogRef = this.dialog.open(MessageDialogComponent);
        dialogRef.componentInstance.showSpinner = true;
        this.api.fetchAllToDos().subscribe(res => {
            this.TODOS = res;
            dialogRef.close();
            this.cdRef.detectChanges();
        });
    }

    getToDosByStatus(status: string): ToDo[] {
        return this.TODOS.filter(todo => todo.toDoStatus === status);
    }
}
