import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from './components/card/card.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MatButtonModule, MatDividerModule, MatIconModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
