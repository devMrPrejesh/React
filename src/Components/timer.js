import React, { Component } from "react";

class Timer extends Component{
   constructor() {
    super();
    this.state = {message:'Your time has been started'};
    this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage(){
        this.setState({message:'Text has been modified'});
    }
    
    render(){
        return (
            <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click me</button>
        </div>
        )
    }


}

export default Timer;