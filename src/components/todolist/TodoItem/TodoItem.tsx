import { useState } from 'react';

import * as S from './TodoItem.styles';

type TodoItemProps = {
  todo: Todo;
  onRemoveTodo: (todoId: Todo['id']) => void;
  onToggleTodoDone: (todoId: Todo['id']) => void;
};

export function TodoItem({ todo, onRemoveTodo, onToggleTodoDone }: TodoItemProps) {
  const { id, text, done } = todo;
  const [isOver, setIsOver] = useState(false);

  // TODO-GYU: Drag n Drop 다시 공부해서 테스트 코드 재작성하기
  // const handleDragStart = (e: DragEvent<HTMLLIElement>) => {
  //   e.currentTarget.style.opacity = '0.3';
  //   e.dataTransfer.setData('id', id.toString());
  // };
  //
  // const handleDragEnd = (e: DragEvent<HTMLLIElement>) => {
  //   e.currentTarget.style.opacity = '1';
  // };
  //
  // const handleDragOver = (e: DragEvent<HTMLLIElement>) => {
  //   e.preventDefault();
  //   setIsOver(true);
  // };
  //
  // const handleDragLeave = (e: DragEvent<HTMLLIElement>) => {
  //   e.preventDefault();
  //   setIsOver(false);
  // };
  //
  // const handledrop = (e: DragEvent<HTMLLIElement>) => {
  //   const fromTodoId = Number(e.dataTransfer.getData('id'));
  //   const toTodoItemId = Number(e.currentTarget.dataset['todoId']!);
  //
  //   onDragTodoItem(fromTodoId, toTodoItemId);
  //   setIsOver(false);
  // };

  return (
    <S.Wrapper $isOver={isOver} data-testid="custom-element">
      <S.TodoItem
        // draggable
        // onDragStart={handleDragStart}
        // onDragEnd={handleDragEnd}
        // onDrop={handledrop}
        // onDragOver={handleDragOver}
        // onDragLeave={handleDragLeave}
        onClick={() => onToggleTodoDone(id)}
        className={done ? 'active' : ''}
      >
        {text}
        <S.TrashIcon onClick={() => onRemoveTodo(id)} title="trashIcon" />
      </S.TodoItem>
    </S.Wrapper>
  );
}

export default TodoItem;
