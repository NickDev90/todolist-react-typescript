import React, { useState } from 'react';
import { TodoFormProps } from '../interfaces';


const ToDoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(title);       
            setTitle('');    
        }
    }

    return (
        <div className='input-field mt3'>
            <input type="text" 
                id="title" 
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className='active'>Enter the title of task</label>
        </div>
    );
};

export default ToDoForm;