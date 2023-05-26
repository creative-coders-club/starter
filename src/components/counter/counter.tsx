import { useState } from 'react';

export function Counter() {
  const [number, setNumber] = useState(0);

  function handleClickChangeNumber(diffNumber: number) {
    setNumber((prev) => (prev += diffNumber));
  }

  return (
    <div>
      <span aria-label="counter-number">{number}</span>
      <div>
        <button onClick={() => setNumber(0)}>reset</button>
        <button onClick={() => handleClickChangeNumber(-100)}>-100</button>
        <button onClick={() => handleClickChangeNumber(100)}>+100</button>
        <button onClick={() => handleClickChangeNumber(-1)}>-</button>
        <button onClick={() => handleClickChangeNumber(1)}>+</button>
      </div>
    </div>
  );
}
