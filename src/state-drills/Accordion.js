import React from 'react';

export default class Accordion extends React.Component {
  constructor () {
    super()
    this.handleShowContent = this.handleShowContent.bind(this);
  }
  
  static defaultProps = {
    sections: []
  }

  state = {
    activeButton: null,
  }

  handleShowContent = (sectionIndex) => {
    this.setState({
      activeButton: sectionIndex
    })
    console.log(this.state.activeButton);
  }

  render() {
    const {activeButton} = this.state
    const mappedSections = this.props.sections.map(function(item, index) { 
    // item.id = index;
    if (index === activeButton) {
    return <li key={index}><button onClick = {() => this.handleShowContent(index)}>{item.title}</button><p>hello</p></li>
  } else {
    return <li key={index}><button onClick = {() => this.handleShowContent(index)}>{item.title}</button></li>
  }})
    console.log(mappedSections);
    return (
      <ul>
        {mappedSections}
      </ul>
    )
  }

}