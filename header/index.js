import React from "react";
import "./index.css";

function Header(){
    return(
        <div class="header"  >
        <h4 Style="color:#5861AE; padding:20px;font-size:18px">LAUNDRY</h4>
          <div class="navbar">
            <a href="#">Pricing</a> 
            <a href="#">Career</a> 
            <a class="active" href="#"> User Name</a> 
            </div>
        </div>
    )
}


export default Header;

