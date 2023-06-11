import S from '../TodoPage/TodoPage.module.scss';
import { TodoType } from '../../types';

export const Todo = ({ todo, removeTodo }: TodoProps) => {
  return (
    <li>
      {todo.text}
      <button className={S.todo_delete} onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

interface TodoProps {
  todo: TodoType;
  removeTodo: (id: number) => void;
}
