import {ToDo} from '../models/toDo';
import {ToDoStatus} from './mock-status';

export const TODOS: ToDo[] = [
    {
        name: 'todo1',
        status: ToDoStatus.DONE,
        description: 'pierwszy todo'
    },
    {
        name: 'todo2',
        status: ToDoStatus.IGNORED,
        description: 'drugi todo'
    },
    {
        name: 'todo3',
        status: ToDoStatus.OPEN,
        description: 'trzeci todo'
    },
    {
        name: 'todo4',
        status: ToDoStatus.INPROGRESS,
        description: 'czwarty todo'
    },
    {
        name: 'todo5',
        status: ToDoStatus.OPEN,
        description: 'piaty todo'
    },
    {
        name: 'todo6',
        status: ToDoStatus.INPROGRESS,
        description: 'szósty todo'
    }
];
