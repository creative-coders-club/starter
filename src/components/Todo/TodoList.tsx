import { Todo } from './Todo';
import { TodoType } from '../../types';

export const TodoList = ({ todos, removeTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

interface TodoListProps {
  todos: TodoType[];
  removeTodo: (id: number) => void;
}
