import React from 'react';
import ReactDOM from 'react-dom';


import Hello from './hello';
import HelloWorld from './helloworld';

const Greeter = React.createClass({
  render() {
    return <span>Tiempo Team</span>
  }
});
ReactDOM.render(<HelloWorld greet={<Greeter/>}/>, document.getElementById('app'));
// ReactDOM.render(<Hello/>, document.getElementById('app'));
