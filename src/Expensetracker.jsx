import React from 'react';
import "./expensetracker.css";

const Expensetracker = (props) => {
    return (
        <>
            <div className='bg-6 expense-container'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
                <div className='expense-wrapper'>
                   <label htmlFor="">Date</label><span className='space'></span> 
                    <input type="date" name="" id="" value={500000} />
                </div>
                <div className='expense-wrapper'>
                    <label htmlFor="">{props.label}</label>
                    <input type="text" name="" id="" placeholder={props.placeholder} /><span><input type="number" name="" className='Amount' placeholder="Price" id="" /></span>
                </div>
                <div className='expense-wrapper'>
                    <button className='button-1'>Submit</button>
                </div>

            </div>
        </>
    )
}

export default Expensetracker;
