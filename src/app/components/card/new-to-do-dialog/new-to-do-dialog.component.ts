import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {ToDoDto} from '../../../../models/toDoDto';
import {ToDoStatus} from '../../../../mocks/mock-status';
import {ApiService} from '../../../api.service';

@Component({
    selector: 'app-new-to-do-dialog',
    templateUrl: './new-to-do-dialog.component.html',
    styleUrls: ['./new-to-do-dialog.component.scss']
})
export class NewToDoDialogComponent implements OnInit {

    IMPORTANCE = [1, 2, 3, 4, 5];
    HOURS;
    MINUTES;
    status: ToDoStatus;
    toDoFormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl(''),
        deadlineDate: new FormControl('', Validators.required),
        deadlineHour: new FormControl('', Validators.required),
        deadlineMinutes: new FormControl('', Validators.required),
        importance: new FormControl('', Validators.required)
    });


    constructor(public dialogRef: MatDialogRef<NewToDoDialogComponent>,
                private api: ApiService) {
    }

    ngOnInit() {
        this.provideHours();
        this.provideMinutes();
    }

    provideHours() {
        const hours = [];
        for (let i = 0; i < 24; i++) {
            hours.push(i + ':00');
        }
        this.HOURS = hours;
    }

    provideMinutes() {
        const minutes = [];
        for (let i = 0; i < 60; i = i + 5) {
            minutes.push(i < 10 ? '0' + i : i + '');
        }
        this.MINUTES = minutes;
    }

    onSubmit() {
        const data: ToDoDto = {
            name: this.toDoFormGroup.controls.name.value,
            description: this.toDoFormGroup.controls.description.value,
            toDoStatus: this.status,
            deadline: this.getUnixTimestamp(),
            importance: this.toDoFormGroup.controls.importance.value
        };
        // this.api.createToDo(data).subscribe(response => {
        //     console.log(response);
        // });
        console.log(data);
    }

    getUnixTimestamp(): number {
        const minutes = (this.toDoFormGroup.controls.deadlineMinutes.value * 5);
        const hours = this.toDoFormGroup.controls.deadlineHour.value;
        const day = this.toDoFormGroup.controls.deadlineDate.value.getDate();
        const month = this.toDoFormGroup.controls.deadlineDate.value.getMonth();
        const year = (this.toDoFormGroup.controls.deadlineDate.value.getYear() + 1900);
        return new Date(Date.UTC(year, month, day, hours, minutes)).getTime() / 1000;
    }

    onCancel() {
        this.dialogRef.close();
    }

}
