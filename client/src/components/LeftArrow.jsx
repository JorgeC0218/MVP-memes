import React from 'react';

class LeftArrow extends React.Component {
  constructor() {
    super();
    this.state = {}
    // bind event handlers here
    this.showPreviousImage = this.showPreviousImage.bind(this);
  }
  showPreviousImage() {
    console.log('dis wont work either!!!!')
  }
  render() {
    return (<div>
      <button onClick={this.showPreviousImage}>Previous image</button>
    </div>);
  }
}

export default LeftArrow;
