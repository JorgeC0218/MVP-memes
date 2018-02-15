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
    this.getMeme = this.getMeme.bind(this);
  }
  //requests
  getMeme() {
    $.ajax({
      url: "",
      method: "GET",
      success: (results) => {
        this.setState({memeArchive: results})
      },
      error: () => {
        console.log('err', err)
      }
    })
  }
  render() {
    return (<div>
      <h1>Jack's App</h1>
      <LeftArrow/>
      <MemeImage/>
      <RightArrow/>
    </div>)
  }
};
ReactDOM.render(<App/>, document.getElementById('app'));
