import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToDoInfoDialogComponent} from './to-do-info-dialog.component';

describe('ToDoInfoDialogComponent', () => {
    let component: ToDoInfoDialogComponent;
    let fixture: ComponentFixture<ToDoInfoDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ToDoInfoDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToDoInfoDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
