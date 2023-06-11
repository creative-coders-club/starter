import { Todo } from './Todo';
import { TodoType } from '../../types';
import S from './TodoPage.module.scss';

export const TodoList = ({ todos, removeTodo }: TodoListProps) => {
  return (
    <ul className={S.todo_list}>
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
