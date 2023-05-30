import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoFilter from './TodoFilter';

describe('TodoFilter', () => {
  const onChangeFilter = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('ALL, TODO, DONE 이 렌더링된다,', () => {
    render(<TodoFilter filter="ALL" onChangeFilter={onChangeFilter} />);

    expect(screen.getByText('ALL')).toBeInTheDocument();
    expect(screen.getByText('TODO')).toBeInTheDocument();
    expect(screen.getByText('DONE')).toBeInTheDocument();
  });

  it('기본적으로 ALL 이 활성화된다.', () => {
    render(<TodoFilter filter="ALL" onChangeFilter={onChangeFilter} />);

    const all = screen.getByText('ALL');

    expect(all).toHaveClass('active');
  });

  it('filter 를 선택하면 onChangeFilter 가 호출된다.', () => {
    render(<TodoFilter filter="ALL" onChangeFilter={onChangeFilter} />);

    const todo = screen.getByText('TODO');

    userEvent.click(todo);

    expect(onChangeFilter).toBeCalled();
    expect(onChangeFilter).toBeCalledWith('TODO');
  });
});
