import {ToDoStatus} from '../mocks/mock-status';

export interface ToDoDto {
    name: string;
    description: string;
    toDoStatus: ToDoStatus;
    deadline: number;
    importance: number;
}
