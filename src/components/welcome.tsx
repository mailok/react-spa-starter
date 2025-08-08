import { useState } from 'react'


export function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-100">
     hello world {count} <button className="bg-sky-500 text-white p-2 rounded-md hover:bg-sky-600 cursor-pointer" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}