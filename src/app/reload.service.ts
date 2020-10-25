import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReloadService {
    private data = new BehaviorSubject(1);
    data$ = this.data.asObservable();

    changeData() {
        this.data.next(Math.random());
    }
}
