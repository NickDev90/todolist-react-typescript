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

      const removingTodo = todos.find(todo => todo.id === id)

      if (removingTodo?.completed) {
          setTodos( prev => prev.filter( todo => todo.id !== id))
      } else {
        const shouldRemove = window.confirm('This task is UNFINISHED. Do you really want to remove it?')
        if (shouldRemove) {
          setTodos( prev => prev.filter( todo => todo.id !== id))
        }
      }
    }

    const removeAllCompleted = () => {
      setTodos( prev => prev.filter( todo => !todo.completed))
    }

    return (
        <div className='container'>
        <ToDoForm onAdd={addHandler}/>
        <TodoList todos={todos} onTogggle={toggleHandler} onRemove={removeHandler} removeAllCompleted={removeAllCompleted}/> 
      </div>
    );
};

export default HomePage;