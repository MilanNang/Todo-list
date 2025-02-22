import { useState } from 'react'
import AddTodos from './componet/AddTodos'
import Todos from './componet/Todos'

import './index.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-slate-500 text-2xl flex justify-center' >Redux ToolKet For Todo</h1>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App
