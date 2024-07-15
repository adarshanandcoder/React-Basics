import React ,{ useState, useEffect } from 'react'
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeContextProvider } from './Contexts/Theme'

function App() {

  const [themeMode , setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <ThemeContextProvider value = {{themeMode , lightTheme , darkTheme}}>
          <div className='flex flex-wrap items-center min-h-screen'>
           <div className='w-full'>
              <div className='w-full flex justify-end max-w-sm mx-auto mb-4'>
                <ThemeBtn/>
              </div>
              <div className='w-full max-w-sm mx-auto'>
                <Card/>
              </div>
            </div>
          </div>
      </ThemeContextProvider>
      
    </>
  )
}

export default App
