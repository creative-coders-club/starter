import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TodoAdder } from './TodoAdder';

describe('TodoAdder', () => {
  const onAddTodo = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  it('입력할 수 있다.', () => {
    render(<TodoAdder onAddTodo={onAddTodo} />);
    const input = screen.getByPlaceholderText(/할 일을 입력 후, Enter 를 누르세요/i);

    userEvent.type(input, 'react');

    expect(input).toHaveValue('react');
  });
  it('입력 후 Enter 를 클릭하면 입력 값이 추가된다.', () => {
    render(<TodoAdder onAddTodo={onAddTodo} />);
    const input = screen.getByPlaceholderText(/할 일을 입력 후, Enter 를 누르세요/i);

    userEvent.type(input, 'react{enter}');

    expect(onAddTodo).toBeCalled();
    expect(onAddTodo).toBeCalledWith('react');
  });

  it('아무것도 입력하지 않고, Enter 를 해도 값이 추가되지 않는다.', () => {
    render(<TodoAdder onAddTodo={onAddTodo} />);
    const input = screen.getByPlaceholderText(/할 일을 입력 후, Enter 를 누르세요/i);

    userEvent.type(input, '{enter}');

    expect(onAddTodo).not.toBeCalled();
  });
});
