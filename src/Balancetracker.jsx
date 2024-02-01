import React, { useRef } from 'react';
import "./testimonial.css";
import "./expensetracker.css";

const Balancetracker = () => {
    const incRef = useRef("");
    const expRef = useRef("");
    const balRef = useRef("");
    
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const incomeValue = incRef.current.value;
        const expenseValue = expRef.current.value;
        const balValue = balRef.current.value; 
        let item =[];
        item.push(incomeValue);
        item.push(expenseValue);
        item.push(balValue);
        let items = JSON.parse(localStorage.getItem("items")) ||[];
        items.push(item)
        localStorage.setItem("Items", JSON.stringify(items))


        console.log("Income: "+incomeValue);
        console.log("Expenses: "+expenseValue);
        console.log("Balance: "+balValue);
        console.log(item);


    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className='bg1 expense-container'>
                <h4>Balance Tracker</h4>
                <p>Track your Balance with NextWallet</p>

                <div className='expense-wrapper'>
                    <label htmlFor="">Income</label>
                    <input type="text" name="" id="" ref={incRef} />
                </div>
                <div className='expense-wrapper'>
                    <label htmlFor="">Expenses</label>
                    <input type="text" name="" id="" ref={expRef} />
                </div>
                <div className='expense-wrapper'>
                    <label htmlFor="">Balance</label>
                    <input type="text" name="" id="" ref={balRef}/>
                </div>
                <div className='expense-wrapper'>
                    <button className='button-1'>Submit</button>
                </div>
            </div>
            </form>
        </>
    )
}

export default Balancetracker
