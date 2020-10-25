export enum ToDoStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
    IGNORED = 'IGNORED'
}

export const NAMES: ToDoStatus[] = [
    ToDoStatus.OPEN, ToDoStatus.IN_PROGRESS, ToDoStatus.DONE, ToDoStatus.IGNORED
];
