import React from 'react';

class RightArrow extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    // bind event handlers here
  }
  getNextImage() {
    console.log('y u no woeeerk!!!??')
  }
  render() {
    return (<div>
      <button onClick={this.getNextImage}>Next image</button>
    </div>);
  }
}

export default RightArrow;
