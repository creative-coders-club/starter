import { NewTodoForm } from '../../components/NewTodoForm/NewTodoForm';
import { TodoList } from '../../components/TodoList/TodoList';
import { render } from '@testing-library/react';
import { TodoPage } from '../../components/TodoPage/TodoPage';

describe('TodoPage 컴포넌트 테스트', () => {
  it('TodoPage가 NewTodoForm과 TodoList 컴포넌트를 렌더링하는가', () => {
    render(<TodoPage />);
  });

  it('NewTodoForm을 클릭 후 새로운 할 일이 목록에 추가되는지 확인', () => {});

  it('TodoList에서 할 일의 delete버튼을 클릭하면 해당 할일이 제거되는지 확인', () => {});
});
