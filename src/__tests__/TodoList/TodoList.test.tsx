import { render, screen } from '@testing-library/react';
import { TodoList } from '../../components/TodoList/TodoList';
import { mockData } from '../../const/mocks';

describe('TodoList 컴포넌트 테스트', () => {
  const { asFragment } = render(<TodoList todos={mockData} removeTodo={jest.fn()} />);
  it('TodoList가 전달받은 list를 잘 그려주는가', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('빈배열을 받았다면 There are no todos yet. 문구 표시되어야함', () => {
    render(<TodoList todos={[]} removeTodo={jest.fn()} />);

    // screen.getByText('There are no todos yet.')는 꼭 따로 변수에 담지 않아도 되는게 아닐까?
    // 오히려 더 선언적인거같기도?
    expect(screen.getByText('There are no todos yet.')).toBeInTheDocument();
  });
});
