import { useState } from 'react';

export function Counter() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    console.log('SDfasf');
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <span>{number}</span>
      <div>
        <button>reset</button>
        <button>-100</button>
        <button>+100</button>
        <button>-</button>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}
