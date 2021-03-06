import {ToDoStatus} from '../mocks/mock-status';

export interface ToDo {
    toDoId: {
        uuid: string
    };
    name: string;
    description: string;
    toDoStatus: ToDoStatus;
    importance: number;
    deadline: string;
}
