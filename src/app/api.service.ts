import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ToDoDto} from '../models/toDoDto';
import {environment} from '../environments/environment';
import {ToDo} from '../models/toDo';
import {CreateToDoResponse} from '../models/create-toDo-response';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    fetchAllToDos(): Observable<ToDo[]> {
        const link = environment.BASE_API_URL + '/';
        return this.http.get<any>(link);
    }

    fetchOneToDo(id: string): Observable<ToDo> {
        const link = environment.BASE_API_URL + '/' + id;
        return this.http.get<any>(link);
    }

    deleteToDo(id: string): Observable<any> {
        const link = environment.BASE_API_URL + '/' + id;
        return this.http.delete<any>(link);
    }

    updateToDo(id: string, dto: ToDoDto): Observable<any> {
        const link = environment.BASE_API_URL + '/' + id;
        const data = {
            name: dto.name,
            description: dto.description,
            toDoStatus: dto.toDoStatus,
            deadline: dto.deadline,
            importance: dto.importance
        };
        return this.http.patch<any>(link, data);
    }

    createToDo(dto: ToDoDto): Observable<CreateToDoResponse> {
        const link = environment.BASE_API_URL;
        const data = {
            name: dto.name,
            description: dto.description,
            toDoStatus: dto.toDoStatus,
            deadline: dto.deadline,
            importance: dto.importance
        };
        return this.http.post<any>(link, data);
    }



}
