import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

describe('카운터 테스트', () => {
  function customRender() {
    render(<Counter />);
    const number = screen.getByLabelText('counter-number');
    const incrementButton = screen.getByRole('button', { name: '+' });
    const decrementButton = screen.getByRole('button', { name: '-' });
    const incrementButton100 = screen.getByRole('button', { name: '+100' });
    const decrementButton100 = screen.getByRole('button', { name: '-100' });
    const resetButton = screen.getByRole('button', { name: 'reset' });
    return { number, incrementButton, decrementButton, incrementButton100, decrementButton100, resetButton };
  }

  it('렌더 테스트', () => {
    const { number, incrementButton, decrementButton, incrementButton100, decrementButton100, resetButton } =
      customRender();

    expect(number).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton100).toBeInTheDocument();
    expect(decrementButton100).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  it('카운터는 + 버튼을 누르면 1만큼 증가한다', () => {
    const { number, incrementButton } = customRender();

    userEvent.click(incrementButton);

    expect(number).toHaveTextContent('1');
  });

  it('카운터는 +100 버튼을 누르면 100만큼 증가한다', () => {
    const { number, incrementButton100 } = customRender();

    userEvent.click(incrementButton100);

    expect(number).toHaveTextContent('100');
  });
  it('카운터는 - 버튼을 누르면 1만큼 감소한다', () => {
    const { number, decrementButton } = customRender();

    userEvent.click(decrementButton);

    expect(number).toHaveTextContent('-1');
  });
  it('카운터는 -100 버튼을 누르면 100만큼 감소한다', () => {
    const { number, decrementButton100 } = customRender();

    userEvent.click(decrementButton100);

    expect(number).toHaveTextContent('-100');
  });
  it('reset 버튼을 누르면 0으로 초기화된다', () => {
    const { number, incrementButton100, resetButton } = customRender();
    userEvent.click(incrementButton100);
    expect(number).toHaveTextContent('100');

    userEvent.click(resetButton);

    expect(number).toHaveTextContent('0');
  });
});
