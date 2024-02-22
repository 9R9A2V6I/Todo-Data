// App.js
import React from 'react';
import Login from './ScreenBar/Login';
import { TodoWrapper } from './components/TodoWrapper';
import { TodoForm } from './components/TodoForm';
import { Routes, Route } from 'react-router-dom';
import SignUp from './ScreenBar/Signup';

const App = () => {
  return (
    <>
      <div className="app">
        <Routes>
          {/* Set the default route to Login */}
          <Route path="/" element={<SignUp />} />
          <Route path="todoWrapper" element={<TodoWrapper />} />
          <Route path ="todoForm" element={<TodoForm/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
