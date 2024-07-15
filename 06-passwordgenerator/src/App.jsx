import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numAllowed , setnumAllowed] = useState(false)  
  const [charAllowed , setcharAllowed] = useState(false)  
  const [password , setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)
   
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="~@#$%^*{}:''|"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)

    }

    setPassword(pass)
  },[length, numAllowed, charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

 


  return (
    <>
      <div className='w-full max-w-md shadow-lg mx-auto p-2 my-8 bg-gray-400'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='w-full outline-none px-3 py-1'
          placeholder="password"
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='bg-blue-600 p-2 text-white outline-none hover:bg-white hover:text-black'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={5}
            value={length}
            max={100}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setnumAllowed((prev)=> !prev);
            }}
             />
             <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setcharAllowed((prev)=> !prev);
            }}
             />
             <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
