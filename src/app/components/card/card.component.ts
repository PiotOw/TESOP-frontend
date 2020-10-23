import {Component, Input, OnInit} from '@angular/core';
import {TODOS} from '../../../mocks/mock-todos';
import {ToDoStatus} from '../../../mocks/mock-status';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    TODOS = TODOS;

    @Input() header: string;
    @Input() status: ToDoStatus;

    constructor() {
    }

    ngOnInit() {
        this.TODOS = this.TODOS.filter(todo => todo.status === this.status);
        console.log(this.TODOS);
    }

}
