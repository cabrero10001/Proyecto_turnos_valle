import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from '../src/componentes/form/index'
import "./index.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Index />
    </>
  )
}

export default App
