export interface ITodo {
    title: string,
    id: number,
    completed: boolean
}

export interface TodoFormProps {
    onAdd(title: string): void
}

export type TodoListProps = {
    todos: ITodo[]
    onTogggle(id: number): void
    onRemove: (id: number) => void
    removeAllCompleted: () => void
}