import {Component, OnInit} from '@angular/core';
import {NAMES} from '../../../mocks/mock-status';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    NAMES = NAMES;

    constructor() {
    }

    ngOnInit() {
    }

}
