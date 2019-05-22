import React from 'react';
import { clearInterval } from 'timers';
// import ReactDOM from 'react-dom';

class Bomb extends React.Component {
  state = {
    count: 0,
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('did mount')
      const newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    console.log('hello')
  }

  render() {
    const isDivisible = function(num) {
      if (num >= 8) {
        return 'BOOM!';
      }
      else if (num %2 === 0) {
        return 'tick';
      }
      else {
        return 'tock';
      }
    }
  return(
    <div>
      <p>
       {isDivisible(this.state.count)}
      </p>
    </div>
  );
  }
}

export default Bomb;