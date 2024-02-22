import React, { useState } from 'react';
import { Todo } from './Todo/Todo';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm/EditTodoForm';
import './Todo.css';
import { NavLink, useNavigate } from 'react-router-dom';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const Navigation = useNavigate();

  const navigHandler = () => {
    Navigation('/todoForm');
    
  };

  var storedListData = localStorage.getItem('ListData');

  var retrievedListData = JSON.parse(storedListData);
  

  const deleteTodo = (id) => setTodos(retrievedListData.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      retrievedListData.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      retrievedListData.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      retrievedListData.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      {/* <TodoForm addTodo={addTodo} /> */}

      <button className="addItems" onClick={navigHandler}>
        Add Task
      </button>

      {retrievedListData.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
