import { useState } from 'react'
import add from './Helper'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>{add(12,34)}</h1>
    </>
  )
}

export default App
