import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ToDoStatus} from '../../../mocks/mock-status';
import {ApiService} from '../../api.service';
import {ToDo} from '../../../models/toDo';
import {MatDialog} from '@angular/material';
import {MessageDialogComponent} from '../message-dialog/message-dialog.component';
import {STATUSES} from '../../../models/statuses';
import {ReloadService} from '../../reload.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    TODOS: ToDo[];

    STATUSES = STATUSES;

    constructor(private api: ApiService,
                private cdRef: ChangeDetectorRef,
                private dialog: MatDialog,
                private reloadService: ReloadService) {
    }

    ngOnInit() {
        // const dialogRef = this.dialog.open(MessageDialogComponent);
        // dialogRef.componentInstance.showSpinner = true;
        // this.api.fetchAllToDos().subscribe(res => {
        //     this.TODOS = res;
        //     dialogRef.close();
        //     this.cdRef.detectChanges();
        // });
        this.reloadService.data$.subscribe(() => {
            // this.api.fetchAllToDos().subscribe(res => {
            //     this.TODOS = res;
            //     this.cdRef.detectChanges();
            // });
            console.log('test');
        });
    }

    getToDosByStatus(status: string): ToDo[] {
        return this.TODOS.filter(todo => todo.toDoStatus === status);
    }
}
