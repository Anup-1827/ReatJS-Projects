import React from 'react'

export default function AddTransaction() {
    return (
        <div className='AddTransaction'>
            <h3>Add AddTransaction</h3>
            <form>
                <div className='form-control'>
                    <label htmlFor='label'>Label</label>
                    <input type="text" placeholder="Enter Label"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'><pre>Amount   (+ income)/(- expenses)</pre></label>
                    <input type="number" placeholder="Enter Amount"/>
                </div>

                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
