import { TodoItem } from 'src/components/todolist/TodoItem';

import * as S from './TodoList.styles';

type TodoListProps = {
  todos: Todo[];
  onRemoveTodo: (todoId: Todo['id']) => void;
  onToggleTodoDone: (todoId: Todo['id']) => void;
};

// GYU-TODO: 테스트 코드 없어도 커버리지 100, 음.. 기능이 없고 UI 만 있어서 그런가?
export function TodoList({ todos, onRemoveTodo, onToggleTodoDone }: TodoListProps) {
  return (
    <S.TodoListWrapper>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id} //
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onToggleTodoDone={onToggleTodoDone}
          />
        );
      })}
    </S.TodoListWrapper>
  );
}
