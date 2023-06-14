import { NewTodoForm } from '../../components/NewTodoForm/NewTodoForm';
import { TodoList } from '../../components/TodoList/TodoList';
import { render } from '@testing-library/react';
import { TodoPage } from '../../components/TodoPage/TodoPage';

describe.only('TodoPage 컴포넌트 테스트', () => {
  const newTodo = 'todo adder';

  async function renderExistTodos() {
    render(<TodoPage />);
    const input = screen.getByPlaceholderText('todo adder');
    const adder = screen.getByRole('button', { name: /add Todo/i });
    expect(screen.queryByText(newTodo)).not.toBeInTheDocument();
    await userEvent.type(input, newTodo);
    await userEvent.click(adder);
  }

  it('TodoPage가 NewTodoForm과 TodoList 컴포넌트를 렌더링하는가', async () => {
    render(<TodoPage />);
    // exists data
    // no data
  });

  it('when no data, render empty todo string', () => {
    render(<TodoPage />);

    expect(screen.getByText(/There/i)).toBeInTheDocument();
  });

  it('when exist todos, render todo list', async () => {
    await renderExistTodos();

    expect(screen.getByText(newTodo)).toBeInTheDocument();
  });

  it('NewTodoForm을 클릭 후 새로운 할 일이 목록에 추가되는지 확인', async () => {
    const newTodo = 'todo adder';
    render(<TodoPage />);
    const input = screen.getByPlaceholderText('todo adder');
    const adder = screen.getByRole('button', { name: /add Todo/i });
    expect(screen.queryByText(newTodo)).not.toBeInTheDocument();

    await userEvent.type(input, newTodo);
    await userEvent.click(adder);

    expect(screen.getByText(newTodo)).toBeInTheDocument();
  });

  it('TodoList에서 할 일의 delete버튼을 클릭하면 해당 할일이 제거되는지 확인', () => {});
});
