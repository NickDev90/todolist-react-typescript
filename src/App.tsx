import { equal } from 'assert';
import React, { useState } from 'react';
import { boolean } from 'yargs';
import Navbar from './Components/Navbar';
import ToDoForm from './Components/ToDoForm';
import TodoList from './Components/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos( prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos( prev => prev.map( todo => {
        
        if (todo.id === id) {
          todo.completed = !todo.completed;

        }
        console.log(todo);
        
        return todo;
      })
    )
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Do you really want to remove this task?')
    if (shouldRemove) {
        setTodos( prev => prev.filter( todo => todo.id !== id))
    }
  }

  return (
    <>
      <Navbar/>
      <div className='container'>
        <ToDoForm onAdd={addHandler}/>
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/> 
      </div>
    </>
  )
}

export default App;
