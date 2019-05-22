import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };
  state = {
    chamber: null,
    spinningTheChamber: false,
  };


  componentWillMount() {
    clearTimeout(this.timeout)
  }

handleClick = () => {
  this.setState({
    spinningTheChamber: true,
  })
  this.timeout = setTimeout(() => {
  const randomNum = Math.ceil(Math.random() * 8)

    this.setState({
      chamber: randomNum,
      spinningTheChamber: false,
    })

  }, 2000) 
}


renderDisplay() {
  const {chamber, spinningTheChamber} = this.state
  const {bulletInChamber} = this.props
  if (spinningTheChamber) {
    return 'spinning the chamber and pulling the trigger! ...'
} else if (chamber === bulletInChamber) {
  return 'BANG!!'
} else {
  return 'you\'re safe!'
  }
}
render() {
  return ( 
    <div className='RouletteGun'>
      <p>
      {this.renderDisplay()}
      </p>
      <button onClick={this.handleClick}>
      Pull the trigger!</button>
      
    </div>
  )
}
}

export default RouletteGun;