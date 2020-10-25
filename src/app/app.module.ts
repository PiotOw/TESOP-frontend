import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from './components/card/card.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatNativeDateModule,
    MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {EditToDoDialogComponent} from './components/card/edit-to-do-dialog/edit-to-do-dialog.component';
import {MessageDialogComponent} from './components/message-dialog/message-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { ToDoInfoDialogComponent } from './components/card/to-do-info-dialog/to-do-info-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        DashboardComponent,
        EditToDoDialogComponent,
        MessageDialogComponent,
        ToDoInfoDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        MessageDialogComponent,
        EditToDoDialogComponent,
        ToDoInfoDialogComponent]
})
export class AppModule {
}
