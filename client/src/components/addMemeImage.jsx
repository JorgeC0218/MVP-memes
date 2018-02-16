import React from 'react';

class addMemeImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: ''
    }
    //bind eventHandlers here
    this.handleName = this.handleName.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleName(event) {
    this.setState({name: event.target.value})
  }

  handleUrl(event) {
    this.setState({url: event.target.value})
  }
  addItem() {
    this.props.addMemeImage(this.state.name, this.state.url);
  }
  render() {
    return (<div>
      Want to add a meme? Give it a name here!:
      <input value={this.state.name} onChange={this.handleName}></input>
      <br/>
      Add the url here!:
      <input value={this.state.url} onChange={this.handleUrl}></input>
      <button onclick={this.addItem}>Add Meme!</button>
    </div>)
  }
}

export default addMemeImage;
