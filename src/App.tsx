import React, { useState } from 'react';
import { Todo } from './todo.model';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prev => [...prev, {id: Math.random().toString(), text}])
    
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prev => {
      return prev.filter(item => item.id !== todoId);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
