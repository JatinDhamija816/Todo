import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <h1 className="text-center font-bold text-5xl font-mono mt-8">Todo</h1>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
