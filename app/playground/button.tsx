import { useState } from 'react';

function SomeButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      I'm supposed to be a button, I've been clicked {count} times.
    </button>
  );
}

export function MyButton() {
  return (
    <div>
      <h1>Welcome to my Button</h1>
      <SomeButton />
    </div>
  );
}
