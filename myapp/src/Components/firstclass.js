import React, {Component, createElement} from 'react'

class Firstc extends Component {
    render(){
       return createElement('h1','','Hello this is Class Compnent using create element');
    }
}

class Anotherclass extends Component {
    render(){
       return <h1>Hello, {JSON.stringify(this.props.name)}</h1>;
    }
}

export default Firstc;
export {Anotherclass};