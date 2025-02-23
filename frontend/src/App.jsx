import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/index.css';
import Form from './components/form/form';
import Ticket from './components/ticket/ticket';

function App() {
  return (
    <>
      <Form />
      <Ticket />
      </>
    
  )
}

export default App;
