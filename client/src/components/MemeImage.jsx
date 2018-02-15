import React from 'react';

class MemeImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      id: ''
    }
    // bind requests here
  }
  render() {
    return (<div>
      <img src='sir.jpeg' alt='Y u break???'/>
    </div>);
  }
}

export default MemeImage;
