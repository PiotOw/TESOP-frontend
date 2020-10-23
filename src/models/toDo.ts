import {ToDoStatus} from '../mocks/mock-status';

export interface ToDo {
    name: string;
    status: ToDoStatus;
    description: string;
}
