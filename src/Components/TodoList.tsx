import React from 'react';
import { TodoListProps } from '../interfaces';


const TodoList: React.FC<TodoListProps> = ({todos, onTogggle, onRemove}) => {
    if (todos.length === 0) return (
        <p className='center flow-text'>There are no tasks yet</p>
    )

    return (
        <ul>
            {todos.map(todo => {
                
                const classes = ['todo']

                if (todo.completed) {
                    classes.push('completed')
                    console.log('completed');
                    
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
        </ul>
    );
};

export default TodoList;