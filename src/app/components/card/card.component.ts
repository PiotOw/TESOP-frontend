import {Component, Input, OnInit} from '@angular/core';
import {ToDoStatus} from '../../../mocks/mock-status';
import {ApiService} from '../../api.service';
import {ToDo} from '../../../models/toDo';
import {MatDialog} from '@angular/material';
import {NewToDoDialogComponent} from './new-to-do-dialog/new-to-do-dialog.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() header: string;
    @Input() status: ToDoStatus;
    @Input() TODOS: ToDo[];

    constructor(private api: ApiService,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        console.log(this.TODOS);
    }

    addToDo() {
        const dialogRef = this.dialog.open(NewToDoDialogComponent);
    }

}
