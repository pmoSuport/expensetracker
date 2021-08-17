import React, { useState } from 'react'

const AddTransaction = () => {
    const [text,setText]= useState('');
    const [amount,setAmount]= useState(0);

    var changeText = (e) => {
        setText(
            e.target.value
        )
    }
    const changeAmount = (e) => {
        setAmount(
            e.target.value
        )
    }
    return (
        <>
          <h3>Add new Transaction</h3>
          <form>
              <div className="form-control">
                  <label htmlFor="text">Text</label>
                  <input type="text" value={text} onChange={changeText} placeholder="Enter your text..."></input>
              </div>
              <div className="form-control">
              <label htmlFor="amount">Amount<br />
              (negative- expense, positive- income)
              </label>
              <input type="number" value={amount} onChange={changeAmount} placeholder="Enter number..."></input>
              </div>
              <button className='btn'>Add Transaction</button>
          </form>  
        </>
    )
}

export default AddTransaction
