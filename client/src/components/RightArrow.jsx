import React from 'react';

class RightArrow extends React.Component {
  constructor() {
    super();
    this.state = {}
    // bind event handlers here
  }
  showNextImage() {
    console.log('y u no woeeerk!!!??')
  }
  render() {
    return (<div>
      <button onClick={this.showNextImage}>Next image</button>
    </div>);
  }
}

export default RightArrow;
