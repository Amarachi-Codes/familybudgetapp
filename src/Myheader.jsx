import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";


let mynavs = ["Expense Tracking", "Income Tracking","Budget Planning","Balance Tracking"];
let mybtns =["Contact","My NextWallet"];
function Myheader(){
    return(
        <>
        <nav className="navbar sticky-top container-fluid mynav">
        <p><a href="" className="logo">NextWallet</a></p>
            <ul className="mylinks">
            {mynavs.map((mynav,index)=>(
                    <li className="mylist" key={index}>{mynav}</li>
                )
                )}
                <span className="space"></span>
                {mybtns.map((mybtn, index)=>(
                    <button className="hero-btn" key={index}>{mybtn}</button>
                )
                )}
                
            </ul>
           
        </nav>
        </>
    )
}
export default Myheader;



