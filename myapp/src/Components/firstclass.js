import React, {Component, createElement} from 'react'

class Firstc extends Component {
    render(){
       return createElement('h1','','Hello this is Class Compnent using create element');
    }
}

class Anotherclass extends Component {
    render(){
       return createElement('div',{className:'AnatherClass'},createElement('h1',null,'Hello this is nested Class Compnent using create element'));
    }
}

export default Firstc;
export {Anotherclass};