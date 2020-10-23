export enum ToDoStatus {
    OPEN = 'OPEN',
    INPROGRESS = 'INPROGRESS',
    DONE = 'DONE',
    IGNORED = 'IGNORED'
}

export const NAMES: ToDoStatus[] = [
    ToDoStatus.OPEN, ToDoStatus.INPROGRESS, ToDoStatus.DONE, ToDoStatus.IGNORED
];
