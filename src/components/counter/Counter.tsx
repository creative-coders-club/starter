import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};
