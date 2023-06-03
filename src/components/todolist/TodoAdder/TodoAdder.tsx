import React, { ChangeEvent, FC, useState } from 'react';

import * as S from './TodoAdder.styles';

type Props = {
  onAddTodo: (todoText: string) => void;
};
export function TodoAdder({ onAddTodo }: Props) {
  const [value, setValue] = useState('');

  const handleSumbt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === '') return;

    onAddTodo(value);
    setValue('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <S.Form onSubmit={handleSumbt}>
      <S.Input
        type="text"
        placeholder="할 일을 입력 후, Enter 를 누르세요"
        autoFocus
        value={value}
        onChange={handleChange}
      />
    </S.Form>
  );
}

export default TodoAdder;
