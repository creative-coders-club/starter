import { useState } from 'react';
import S from './TodoPage.module.scss';

export const NewTodoForm = ({ addTodo }: TodoProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addTodo(text);
    setText('');
  };

  return (
    <form className={S.new_todo_form} onSubmit={handleSubmit}>
      <input
        className={S.new_todo_form_input}
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className={S.new_todo_form_button} type="submit">
        Add Todo
      </button>
    </form>
  );
};

interface TodoProps {
  addTodo: (text: string) => void;
}
