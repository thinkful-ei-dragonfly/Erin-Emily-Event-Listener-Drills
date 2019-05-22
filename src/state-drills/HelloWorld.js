import React from 'react';
// import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  state = {
    who: 'world',
  }
  handleClick = word => {
    this.setState({
      who: word
    });
  }
  render() {
  return(
    <div>
      <p>
        Hello {this.state.who}!
      </p>
      <button onClick={() => this.handleClick('friend')}>Friend</button>
      <button onClick={() => this.handleClick('React')}>React</button>
      <button onClick={() => this.handleClick('World')}>World</button>
    </div>
  );
  }
}

export default HelloWorld;