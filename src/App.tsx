import { useState } from 'react';

import * as S from './App.styles';

import { TodoAdder } from 'src/components/todolist/TodoAdder';
import { TodoFilter } from 'src/components/todolist/TodoFilter';
import { TodoItem } from 'src/components/todolist/TodoItem';
import { Container } from './App.styles';

const initialData: Todo[] = [
  {
    id: 1,
    text: 'react',
    done: false,
  },
  {
    id: 2,
    text: 'typescript',
    done: true,
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialData);
  const [filter, setFilter] = useState<Filter>('ALL');

  const handleAddTodo = (text: Todo['text']) => {
    const todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos((todos) => [...todos, todo]);
  };

  const handleRemoveTodo = (id: Todo['id']) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodoDone = (id: Todo['id']) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const handleChangeFilter = (filter: Filter) => {
    setFilter(filter);
  };

  const todoList = getTodos(todos, filter);

  return (
    <S.Wrapper>
      <S.Container>
        <TodoAdder onAddTodo={handleAddTodo} />
        <TodoFilter filter={filter} onChangeFilter={handleChangeFilter} />
        {todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemoveTodo={handleRemoveTodo}
              onToggleTodoDone={handleToggleTodoDone}
            />
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
}

const getTodos = (todos: Todo[], filter: Filter) => {
  if (filter === 'TODO') return todos.filter((todo) => !todo.done);
  if (filter === 'DONE') return todos.filter((todo) => todo.done);

  return todos;
};

export default App;
