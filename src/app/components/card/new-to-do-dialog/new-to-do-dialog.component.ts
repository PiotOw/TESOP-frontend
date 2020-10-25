import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-new-to-do-dialog',
    templateUrl: './new-to-do-dialog.component.html',
    styleUrls: ['./new-to-do-dialog.component.scss']
})
export class NewToDoDialogComponent implements OnInit {

    IMPORTANCE = [1, 2, 3, 4, 5];
    HOURS;
    MINUTES;
    toDoFormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl(''),
        deadlineDate: new FormControl('', Validators.required),
        deadlineHour: new FormControl('', Validators.required),
        deadlineMinutes: new FormControl('', Validators.required),
        importance: new FormControl('', Validators.required)
    });


    constructor(public dialogRef: MatDialogRef<NewToDoDialogComponent>) {
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
        console.log(this.toDoFormGroup.controls.deadlineDate.value.getDate());
        console.log(this.toDoFormGroup.controls.deadlineHour.value);
        console.log(this.toDoFormGroup.controls.deadlineMinutes.value);
    }

    onCancel() {
    }

}
