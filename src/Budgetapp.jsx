import React from 'react';
import "./budgetapp.css";

const Budgetapp = () => {
    return (
        <div className='form-container'>
            <form >
                <h4>Budget Tracker</h4>
                <div>
                    <h6>YOUR BALANCE</h6>
                    <p>$0</p>
                </div>
                <div className='display-output'>
                    <div>
                        <h6>INCOME</h6>
                        <p>$0</p>
                    </div>
                    <div>
                        <h6>EXPENSES</h6>
                        <p>$0</p>
                    </div>
                </div>
                <h6 className='trans_history'>ADD NEW TRANSACTION</h6>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' />
                <label htmlFor="amount">Amount</label>
                <input type="text" id='amount' />

                <div>
                    <button className='btn-submit'>ADD INCOME</button><br></br>
                    <button className='btn-submit'>ADD EXPENSE</button>
                </div>

            </form>
            <ul className='income'>

            </ul>
            <ul className='expense'>

            </ul>
        </div>
    )
}

export default Budgetapp
