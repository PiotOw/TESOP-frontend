import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ToDoStatus} from '../../../mocks/mock-status';
import {ApiService} from '../../api.service';
import {ToDo} from '../../../models/toDo';
import {MatDialog} from '@angular/material';
import {EditToDoDialogComponent} from './edit-to-do-dialog/edit-to-do-dialog.component';
import {ToDoInfoDialogComponent} from './to-do-info-dialog/to-do-info-dialog.component';
import {ReloadService} from '../../reload.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() header: string;
    @Input() status: ToDoStatus;
    @Input() TODOS: ToDo[];
    TODOLIST: ToDo[];

    constructor(private api: ApiService,
                private dialog: MatDialog,
                private reloadService: ReloadService) {
    }

    ngOnInit() {
        this.TODOLIST = this.TODOS;

        this.reloadService.data$.subscribe(() => {
            this.api.fetchAllToDos().subscribe(res => {
                this.TODOLIST = res.filter(todo => todo.toDoStatus === this.status);
            });
        });
    }

    addToDo() {
        const dialogRef = this.dialog.open(EditToDoDialogComponent);
        dialogRef.componentInstance.toDoFormGroup.controls.status.setValue(this.status);
        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this.api.createToDo(response).subscribe(() => {
                    this.reloadService.refetchToDos();
                });
            }
        });
    }

    getInfo(toDo: ToDo) {
        const dialogRef = this.dialog.open(ToDoInfoDialogComponent);
        dialogRef.componentInstance.toDo = toDo;
    }

}
