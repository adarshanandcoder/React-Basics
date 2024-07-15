import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-2xl mb-4'>Hello Buddy</h1>
      <Card username="Adarsh" btnText="Click Me"/>
      <Card username="Anand" btnText="Visit Me" />
    </>
  )
}

export default App
