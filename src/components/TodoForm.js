import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./TodoForm.css"

export const TodoForm = () => {
  const [value, setValue] = useState('');

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
      let ListData = JSON.stringify(todos);
      localStorage.setItem('ListData', ListData);
    }
  };
  return (
    <div className='todoAddContainer'>
    <form onSubmit={handleSubmit} className="TodoFormAdd">
      <label htmlFor="">Add User</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
    </div>
  );
};
