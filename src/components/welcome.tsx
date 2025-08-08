import { useState } from 'react';

export function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-sky-100">
      hello world {count}{' '}
      <button
        className="cursor-pointer rounded-md bg-sky-500 p-2 text-white hover:bg-sky-600"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
