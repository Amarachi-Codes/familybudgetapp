import React, { useState } from 'react';
import "./expensetracker.css";

const Expensetracker = (props) => {

    const [date, setDate] = useState("");
    const [expenses, setExpenses] = useState("");
    const [price, setPrice] = useState("");
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleExpensesChange = (e) => {
        setExpenses(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        let itemValue = [];
        itemValue.push(date)
        itemValue.push(expenses)
        itemValue.push(price)
        let itemValues = JSON.parse(localStorage.getItem("itemValues")) || [];
        itemValues.push(itemValue);
        localStorage.setItem("itemValues", JSON.stringify(itemValues))

        console.log("Date: " + date);
        console.log("Expenses " + expenses);
        console.log("price " + price);
        console.log(itemValue);
    }

    // function Displayitems() {
    //     let mylist = document.getElementById("mylist");
    //     mylist = "";
    //     let itemValues = JSON.parse(localStorage.getItem("itemValues")) || [];

    //     itemValues.forEach((itemValue) => {
    //         const divtags = document.createElement("div");
    //         divtags.classList.add("myitems");

    //         divtags.innerHTML = `
    //     <p>${itemValue.date}</p>
    //     <p>${itemValue.expenses}</p>
    //     <p>${itemValue.price}</p>
    //     `;
    //           mylist.appendChild(divtags);
    //     });
    // }



    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className='bg-6 expense-container'>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <div className='expense-wrapper'>
                        <label htmlFor="">Date</label><span className='space'></span>
                        <input type="date" name="" id="" onChange={handleDateChange} />
                    </div>
                    <div className='expense-wrapper'>
                        <label htmlFor="">{props.label}</label>
                        <input type="text" name="" id="" placeholder={props.placeholder} onChange={handleExpensesChange} /><span><input type="number" name="" className='Amount' placeholder="Price" id="" onChange={handlePriceChange} /></span>
                    </div>
                    <div className='expense-wrapper'>
                        <button className='button-1'>Submit</button>
                    </div>

                </div>
            </form>
            {/* <div className='mylist'>
                <Displayitems />
            </div> */}
        </>
    )
}

export default Expensetracker;
