import { Todo } from '../Todo/Todo';
import { TodoType } from '../../types';
import S from '../TodoPage/TodoPage.module.scss';

export const TodoList = ({ todos, removeTodo }: TodoListProps) => {
  if (!todos.length) {
    return (
      <div className={S.todo_list_empty}>
        <p>There are no todos yet.</p>
      </div>
    );
  }

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
