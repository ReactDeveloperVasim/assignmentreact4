import React from "react";

export const Mobile=({url,name,price,desc})=>{
    const handleClick=()=>{
        alert(`Thank You For Ordering ${name}`);
      }
      const handleClick1=()=>{
        alert(`Thank You For Adding ${name} in Your Cart`);
      }
    return(
        <div className="sub">
        <img src={`img/${url}.webp`} alt=" " />
        <h1>{name}</h1>
        <h2>{price}</h2>
        <p>{desc}</p>
        <div>
        <button onClick={handleClick1}><b>ADD TO CART</b></button>
        <button onClick={handleClick}><b>BUY</b></button>
        </div>
        </div>
    );
}