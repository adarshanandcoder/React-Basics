import React, {useId} from "react"

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className ="",
}){
    const amountInputId = useId()
    return(
        <div className = {`bg-white p-3 rounded-xl text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input 
                id={amountInputId}
                className='outline-none bg-transparent w-full py-2'
                type="number"
                value={amount}
                disabled={amountDisable}
                placeholder="Amount"
                onChange={(e) => onAmountChange && 
                    onAmountChange(Number(e.target.value))
                }
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select
                className ='outline-none rounded-lg bg-gray-500 p-1 cursor-pointer'
                value={selectCurrency}
                onChange={(e)=> onCurrencyChange && 
                    onCurrencyChange(e.target.value)
                }
                diabled = {currencyDisable}
                >
                    {currencyOptions.map((currency)=>
                     (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    )
                    )}
                </select>
            </div>
        </div>
    );
}

export default InputBox