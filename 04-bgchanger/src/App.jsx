import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color,setColor] = useState("pink")

  return (
    <>
      <div className="w-full h-screen duration-200"
       style ={{backgroundColor : Color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full">
            <button onClick={()=>setColor("red")} className="outline-none px-4 text-white rounded-full py-1 shadow-lg"
            style={{backgroundColor : "red" }}>Red</button>
            <button onClick={()=>setColor("blue")} className="outline-none px-4 text-white rounded-full py-1 shadow-lg"
            style={{backgroundColor : "blue" }}>Blue</button>
            <button onClick={()=>setColor("green")} className="outline-none px-4 text-white rounded-full py-1 shadow-lg"
            style={{backgroundColor : "green" }}>Green</button>
            <button onClick={()=>setColor("yellow")} className="outline-none px-4 text-black rounded-full py-1 shadow-lg"
            style={{backgroundColor : "yellow" }}>yellow</button>
            <button onClick={()=>setColor("Black")} className="outline-none px-4 text-white rounded-full py-1 shadow-lg"
            style={{backgroundColor : "black" }}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
