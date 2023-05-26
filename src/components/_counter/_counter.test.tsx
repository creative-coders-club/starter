import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './_counter';

describe('카운터 테스트', () => {
  it('렌더 테스트', () => {
    // given
    render(<Counter />);

    const $number = screen.getByText(0);
    const increButton = screen.getByRole('button', { name: '+' });
    const decreButton = screen.getByRole('button', { name: '-' });

    // when

    // then
    expect(decreButton).toBeInTheDocument();
    // expect(decreButton).not.toBeInTheDocument();
  });
  it('카운터는 + 버튼을 누르면 1만큼 증가한다', () => {
    // given
    render(<Counter />);
    const number = screen.getByText(0);
    const increButton = screen.getByRole('button', { name: '+' });
    expect(number.textContent).toBe('0'); // 고민 0

    // when
    userEvent.click(increButton);

    // then
    expect(number.textContent).toBe('1'); // 고민 0
  });
  it('카운터는 +100 버튼을 누르면 100만큼 증가한다', () => {});
  it('카운터는 - 버튼을 누르면 1만큼 감소한다', () => {});
  it('카운터는 -100 버튼을 누르면 100만큼 감소한다', () => {});
  it('reset 버튼을 누르면 0으로 초기화된다', () => {});
});
