import React from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid/v4';

class BoxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(box) {
    let newBox = { ...box, id: uuid() };
    this.setState(st => ({
      boxes: [...st.boxes, newBox]
    }));
  }

  removeBox(boxId) {
    this.setState(st => ({
      boxes: st.boxes.filter(box => box.id !== boxId)
    }))
  }

  renderBoxList() {
    return (
      <div>
        {this.state.boxes.map(box => (
          <Box key={box.id} id={box.id}
            height={box.height}
            width={box.width}
            color={box.color} removeBox={this.removeBox}/>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} removeBox={this.removeBox} />
        {this.renderBoxList()}
      </div>
    )
  }
}



export default BoxList;