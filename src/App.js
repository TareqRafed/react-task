import React from 'react';
import Head from './head.js';
import Container from './container.js';
import Bottom from "./bottom.js"
import './App.css';

class App extends React.Component {    // I am using a state here to update when a user click on a channel so the code knows what to do
  state = {
    open: false,
    name: ''
  }

  toggel = (e) => {
    if (this.state.open === false && this.state.name === ""){     // all these If statments to make toggeling more dynamic and better
    this.setState({
      open: true,
      name: e.currentTarget.textContent

    });
  } else if (this.state.open === true && this.state.name === e.currentTarget.textContent) {
    this.setState({
      open: false,
      name: ''
    });
  } else if(this.state.open === true && this.state.name !== "") {
    this.setState({
      open: true,
      name: e.currentTarget.textContent
  });
  }
}


  render() {
    return (

      <div className="App">
        <header className="App-header">

          <div className="box1">
            <Head />
            <Container name={this.state.name} open={this.state.open} toggel={this.toggel} />
            <Bottom name={this.state.name} />
          </div>

        </header>
      </div>

    )
  }


}

export default App;
