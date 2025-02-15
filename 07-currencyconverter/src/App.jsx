import { useState } from 'react'
import {InputBox} from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount , setAmount] = useState()
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const[convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(From)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert =  () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div className = 'w-full h-screen bg-black flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage : `url('https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
      >
        <div className='w-full'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
              <form onSubmit={(e)=>{
                e.preventDefault()
                convert()
              }} >
                <div className='w-full mb-1'>
                  <InputBox label="From" 
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>
                    setAmount(amount)
                  }
                  onAmountChange={(amount)=>setAmount(amount)}
                  selectCurrency={from}

                  />
                </div>
                <div className='relative w-full h-0.5'>
                  <button
                  type="button"
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white text-white bg-blue-500 rounded-lg px-2 py-0.5'
                  onClick={swap}
                  >
                    Swap
                  </button>
                </div>
                <div className='w-full mt-1 mb-4'>
                  <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>
                    setTo(currency)
                  }
                  selectCurrency={to}
                  amountDisable
                   />
                </div>
                <div>
                  <button
                  type="submit"
                  className='w-full bg-blue-600 rounded-md p-3 text-white'
                  onclick={convert}
                  >
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
