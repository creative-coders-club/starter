import { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

import S from './TodoPage.module.scss';
import { TodoType } from '../../types';

export const TodoPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (text: string) => {
    // Each todo will have a unique id (using the current timestamp)
    const newTodo = { id: Date.now(), text: text };
    setTodos([newTodo, ...todos]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={S.app}>
      <NewTodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};
