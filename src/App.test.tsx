import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

const TODOS: Todo[] = [
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

describe('E2E - App 테스트', () => {
  it('데이터가 있는 경우 데이터를 렌더링한다', () => {
    const { container } = render(<App />);

    TODOS.forEach((todo) => {
      expect(container).toHaveTextContent(todo.text);
    });
  });
  it('투두 아이템을 추가할 수 있다.', () => {
    render(<App />);
    const adder = screen.getByPlaceholderText(/할 일을 입력 후, Enter 를 누르세요/);

    userEvent.type(adder, 'NEW_TODO{enter}');

    const newItem = screen.getByText('NEW_TODO');
    expect(newItem).toBeInTheDocument();
  });
  it('filter 를 변경할 수 있다.', () => {
    // filter 변경시 filter 가 하이라이트되고, 투두리스트의 아이템이 달라진다.
    render(<App />);
    const allFilter = screen.getByText('ALL');
    expect(allFilter).toHaveClass('active');

    const todoFilter = screen.getByText('TODO');
    userEvent.click(todoFilter);
    expect(allFilter).not.toHaveClass('active');
    expect(todoFilter).toHaveClass('active');
  });
  it('filter 변경 시 filter 에 따라 투두리스트가 변한다.', () => {
    const { container } = render(<App />);
    const doneFilter = screen.getByText('DONE');
    userEvent.click(doneFilter);

    expect(container).not.toHaveTextContent(TODOS[0].text);
    expect(container).toHaveTextContent(TODOS[1].text);
  });
  it('투두 아이템을 선택하면 해당 아이템의 활성화 상태가 변한다', () => {
    render(<App />);
    const todoItem1 = screen.getByText(TODOS[0].text);
    expect(todoItem1).not.toHaveClass('active');

    userEvent.click(todoItem1);

    expect(todoItem1).toHaveClass('active');
  });
  it('투두 아이템을 삭제할 수 있다', () => {
    render(<App />);
    const todoItem = screen.getByText(TODOS[0].text);
    const trashIcon = within(todoItem).getByTitle('trashIcon');
    expect(trashIcon).toBeInTheDocument();

    userEvent.click(trashIcon);

    expect(trashIcon).not.toBeInTheDocument();
  });
});
