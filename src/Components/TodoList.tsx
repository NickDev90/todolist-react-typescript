import React from 'react';
import { TodoListProps } from '../interfaces';


const TodoList: React.FC<TodoListProps> = ({todos, onTogggle, onRemove, removeAllCompleted}) => {
    if (todos.length === 0) return (
        <p className='center flow-text'>There are no tasks yet</p>
    )

    return (
        <ul>
            {todos.map(todo => {
                
                const classes = ['todo'];

                if (todo.completed) {
                    classes.push('completed');
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" 
                                checked={todo.completed} 
                                onChange={onTogggle.bind(null, todo.id)} 
                            />
                            <span>{todo.title}</span>
                            <i className='material-icons red-text'
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    onRemove(todo.id);
                                }}
                            > delete </i>
                        </label>
                    </li>
                )
            })}

            {/* {todos.some(todo => todo.completed) && <button onClick={removeAllCompleted}>
                Delete all completed
            </button>
                
            } */}
        </ul>
    );
};

export default TodoList;