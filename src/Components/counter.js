import React, { Component } from "react";

class Counter extends Component{
constructor(){
    super();
    this.state = {
        count : 0
    }
    this.increment = this.increment.bind(this);

}    
increment(){
    

    this.setState((currentValue,props)=>({count:currentValue.count+props.addValue}))
}   
incrementf(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
}

render(){
    return (
        <div>
            <div><h1>Count is {this.state.count}</h1></div>
            <div><button onClick={()=>this.incrementf()}>Click me Increment</button></div>

        </div>
    )
}

}

export default Counter;