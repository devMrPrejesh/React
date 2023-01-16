import React from "react";

let Car = (props) => {return(
<div>
    <h1>{props.owner} have {props.model} car</h1>
    {props.children}
</div>)}

export default Car;