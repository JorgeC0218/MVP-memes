import React from 'react';

class LeftArrow extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    // bind event handlers here
    this.getPreviousImage = this.getPreviousImage.bind(this);
  }
  getPreviousImage() {
    console.log('dis wont work either!!!!')
  }
  render() {
    return (<div>
      <button onClick={this.getPreviousImage}>Previous image</button>
    </div>);
  }
}

export default LeftArrow;
