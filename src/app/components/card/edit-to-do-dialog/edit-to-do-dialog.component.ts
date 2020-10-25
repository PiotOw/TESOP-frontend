import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ToDoDto} from '../../../../models/toDoDto';
import {ToDo} from '../../../../models/toDo';
import {STATUSES} from '../../../../models/statuses';

@Component({
    selector: 'app-new-to-do-dialog',
    templateUrl: './edit-to-do-dialog.component.html',
    styleUrls: ['./edit-to-do-dialog.component.scss']
})
export class EditToDoDialogComponent implements OnInit {

    IMPORTANCE = [1, 2, 3, 4, 5];
    STATUSES = STATUSES;
    toDoFormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl(''),
        deadlineDate: new FormControl('', Validators.required),
        importance: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required)
    });
    toDo: ToDo;

    constructor(public dialogRef: MatDialogRef<EditToDoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ToDo) {
    }

    ngOnInit() {
        this.toDo = this.data;
        if (this.toDo) {
            this.toDoFormGroup.controls.name.setValue(this.toDo.name);
            this.toDoFormGroup.controls.description.setValue(this.toDo.description ? this.toDo.description : '');
            this.toDoFormGroup.controls.deadlineDate.setValue(new Date(this.toDo.deadline));
            this.toDoFormGroup.controls.importance.setValue(this.toDo.importance);
            this.toDoFormGroup.controls.status.setValue(this.toDo.toDoStatus);
        }
    }

    onSubmit() {
        if (this.toDoFormGroup.valid) {
            const data: ToDoDto = {
                name: this.toDoFormGroup.controls.name.value,
                description: this.toDoFormGroup.controls.description.value,
                toDoStatus: this.toDoFormGroup.controls.status.value,
                deadline: this.getUnixTimestamp(),
                importance: this.toDoFormGroup.controls.importance.value
            };
            this.dialogRef.close(data);
        }
    }

    getUnixTimestamp(): number {
        const day = this.toDoFormGroup.controls.deadlineDate.value.getDate();
        const month = this.toDoFormGroup.controls.deadlineDate.value.getMonth();
        const year = (this.toDoFormGroup.controls.deadlineDate.value.getYear() + 1900);
        return new Date(Date.UTC(year, month, day)).getTime() / 1000;
    }

    onCancel() {
        this.dialogRef.close();
    }

}
