import { render, screen } from '@testing-library/react';
import { Todo } from '../../components/Todo/Todo';
import userEvent from '@testing-library/user-event';

describe('Todo 컴포넌트 테스트', () => {
  const mockFn = jest.fn();
  const TodoComponent = <Todo todo={{ id: 1, text: 'test' }} removeTodo={mockFn} />;

  it('prop으로 전달받은 text가 잘 그려지는가', () => {
    render(TodoComponent);
    const todoText = screen.getByText(/test/i);

    expect(todoText).toBeInTheDocument();
  });

  it('todo마다 delete 버튼이 잘 그려지는가', () => {
    render(TodoComponent);
    const deleteButton = screen.getByRole('button');

    expect(deleteButton).toBeInTheDocument();
  });

  it('delete 버튼을 클릭하면 removeTodo 함수가 호출되는가', () => {
    render(TodoComponent);
    const deleteButton = screen.getByRole('button');

    userEvent.click(deleteButton);

    expect(mockFn).toBeCalledTimes(1);
  });
});
