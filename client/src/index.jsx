import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LeftArrow from './components/LeftArrow.jsx';
import RightArrow from './components/RightArrow.jsx';
import MemeImage from './components/MemeImage.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memeArchive: []
    }
    // bind all request to state here
    this.addMemeImage = this.getMemeImage.bind(this);
    this.getMemeImage = this.getMemeImage.bind(this);
  }
  //requests
  addMemeImage(name, url) {
    $.ajax({
      method: 'POST',
      url: './bestMemes',
      contentType: 'application/json',
      data: JSON.stringify({name: name, url: url})
    }).done(() => {
      this.getMeme();
    });
  }

  getMemeImage() {
    $.ajax({
      url: "./bestMemes",
      method: "GET",
      success: (results) => {
        this.setState({memeArchive: results})
      },
      error: () => {
        console.log('err', err)
      }
    })
  }
  componentDidMount() {
    this.getMemeImage();
  }
  render() {
    return (<div>
      <h1>Jack's App</h1>
      <LeftArrow/>
      <MemeImage addMemeImage={this.addMemeImage}/>
      <RightArrow/>
    </div>)
  }
};
ReactDOM.render(<App/>, document.getElementById('app'));
