// import react-testing methods
import { fireEvent, render } from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import { Counter } from './Counter';

test('카운터 테스트', () => {
  // Counter 컴포넌트 렌더링
  const { getByText } = render(<Counter />);
  // '+'와 '-' 버튼 요소를 가져옴
  const incrementButton = getByText('+');
  const decrementButton = getByText('-');

  // 텍스트가 "Count: 숫자" 패턴에 맞는 요소를 반환하는 함수
  const count = () => getByText(/Count: \d/);

  // 초기 카운트 값이 0인지 확인
  expect(count().textContent).toBe('Count: 0');

  // '+' 버튼 클릭 이벤트 발생시킴
  fireEvent.click(incrementButton);
  // 카운트 값이 1로 증가했는지 확인
  expect(count().textContent).toBe('Count: 1');

  // '-' 버튼 클릭 이벤트 발생시킴
  fireEvent.click(decrementButton);
  // 카운트 값이 다시 0으로 감소했는지 확인
  expect(count().textContent).toBe('Count: 0');
});
