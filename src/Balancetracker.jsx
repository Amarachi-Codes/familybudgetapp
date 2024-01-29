import React from 'react';

const Balancetracker = () => {
    return (
        <>
            <div className='bg1 expense-container'>
                <h4>Balance Tracker</h4>
                <p>Track your Balance with Next Wallet</p>

                <div className='expense-wrapper'>
                    <label htmlFor="">Income</label>
                    <input type="text" name="" id="" value={500000} />
                </div>
                <div className='expense-wrapper'>
                    <label htmlFor="">Expenses</label>
                    <input type="text" name="" id="" value={200000} />
                </div>
                <div className='expense-wrapper'>
                    <label htmlFor="">Balance</label>
                    <input type="text" name="" id="" />
                </div>
            </div>

        </>
    )
}

export default Balancetracker
