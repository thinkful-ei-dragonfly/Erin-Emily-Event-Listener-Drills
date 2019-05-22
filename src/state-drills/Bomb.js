import React from 'react';
// import ReactDOM from 'react-dom';

class Bomb extends React.Component {
  state = {
    count: 0,
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('did mount')
      if (this.state.count < 8) {
      const newCount = this.state.count + 1
      this.setState({
        count: newCount
      })}
      else {
        clearInterval(this.interval)
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    console.log('unmount')
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