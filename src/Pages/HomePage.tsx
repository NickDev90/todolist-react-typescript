import React, { useEffect, useState } from 'react';
import ToDoForm from '../Components/ToDoForm';
import TodoList from '../Components/TodoList';
import { ITodo } from '../interfaces';

const HomePage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect( ()=> {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
      setTodos(saved) 
    }, [])
  
    useEffect( ()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
  
    const addHandler = (title: string) => {
      const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false
      }
      setTodos( prev => [newTodo, ...prev])
    }
  
    const toggleHandler = (id: number) => {
      setTodos(prev =>
        prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }         
        return todo
      }))
    }
  
    const removeHandler = (id: number) => {
      const shouldRemove = window.confirm('Do you really want to remove this task?')
      if (shouldRemove) {
          setTodos( prev => prev.filter( todo => todo.id !== id))
      }
    }

    return (
        <div className='container'>
        <ToDoForm onAdd={addHandler}/>
        <TodoList todos={todos} onTogggle={toggleHandler} onRemove={removeHandler}/> 
      </div>
    );
};

export default HomePage;