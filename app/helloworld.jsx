import React from 'react';

//
const HelloWorld = React.createClass( {
  propTypes: {
    greet: React.PropTypes.object
  },

  render() {
    return (<div>
      <h1>Hello {this.props.greet}!</h1>
    </div>);
  }
});

export default HelloWorld;
