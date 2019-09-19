import React from 'react';

class Box extends React.Component {
  render() {
    console.log(this.props);
    const boxStyle = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`, 
      backgroundColor: this.props.color
      }
    return (
    <div style={boxStyle}>
      <button onClick={(evt => this.props.removeBox(this.props.id, evt))}>X</button>
    </div>)
  }
}

export default Box;