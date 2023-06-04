import { render, screen } from '@testing-library/react';

import { TodoItem } from './TodoItem';
import userEvent from '@testing-library/user-event';

describe('TodoItem 컴포넌트', () => {
  const TODO = {
    id: 1,
    text: 'example',
    done: false,
  };

  const onRemoveTodo = jest.fn(); // 가짜 함수, 모의
  const onToggleTodoDone = jest.fn();
  const onDragTodoItem = jest.fn();

  function renderComponent(todo: Todo) {
    return render(
      <TodoItem
        todo={todo}
        onRemoveTodo={onRemoveTodo}
        onToggleTodoDone={onToggleTodoDone}
        onDragTodoItem={onDragTodoItem}
      />,
    );
  }

  beforeEach(() => jest.clearAllMocks());

  describe('전달된 todo 를 렌더링한다', () => {
    it('done 이 아닌 경우', () => {
      renderComponent(TODO);
      const text = screen.getByText(/example/i);

      expect(text).toBeInTheDocument();
      expect(text).not.toHaveClass('active');
    });

    it('done 인 경우', () => {
      renderComponent({ ...TODO, done: true });
      const text = screen.getByText(/example/i);

      expect(text).toBeInTheDocument();
      expect(text).toHaveClass('active');
    });
  });
  it('trash 아이콘을 클릭하여 아이템을 삭제한다', () => {
    renderComponent(TODO);
    const trashIcon = screen.getByTitle('trashIcon');

    userEvent.click(trashIcon);

    expect(onRemoveTodo).toBeCalled();
  });

  it('todo text 를 클릭하여 todo Item의 상태를 변환한다', () => {
    renderComponent(TODO);
    const todoText = screen.getByText(/example/);

    userEvent.click(todoText);

    expect(onToggleTodoDone).toBeCalled();
    expect(onToggleTodoDone).toBeCalledWith(TODO['id']);
  });
});
