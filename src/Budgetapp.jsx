import React from 'react'

const Budgetapp = () => {
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h2>Budget Tracker</h2>
                <div>
                    <h5>YOUR BALANCE</h5>
                    <p>$0</p>
                </div>
                <div>
                    <div>
                        <h3>INCOME</h3>
                        <p>$0</p>
                    </div>
                    <div>
                        <h3>EXPENSES</h3>
                        <p>$0</p>
                    </div>
                </div>
                <h3>TRANSACTION HISTORY</h3>
                <h3>ADD NEW TRANSACTION</h3>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' />
                <label htmlFor="amount">Amount</label>
                <input type="text" id='amount' />




            </form>
        </div>
    )
}

export default Budgetapp
