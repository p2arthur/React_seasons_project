//Basic modules import
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import SpinnerLoader from "./SpinnerLoader";
import HotReload from "./appconfig";
HotReload();

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓App Component↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓/

class App extends Component {
  //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Defining the initial state of our component↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓/
  state = { myLatitude: null, errorMessage: "" };

  componentDidMount() {
    //Make sure that the in the instant our App component is created we will start to attempt to get the users location
    window.navigator.geolocation.getCurrentPosition(
      //We called ↓setState↓ to update the component state and re-render with the latitude from getCurrentPosition
      (position) => this.setState({ myLatitude: position.coords.latitude }),

      (error) => this.setState({ errorMessage: error.message })
    );
  }

  //↓↓↓↓↓↓↓↓↓↓↓↓Helper Function↓↓↓↓↓↓↓↓↓↓
  renderContent() {
    if (this.state.errorMessage && !this.state.myLatitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.myLatitude) {
      return <SeasonDisplay myLatitude={this.state.myLatitude} />;
    }
    return <SpinnerLoader message="Please accept location request" />;
  }

  //↓↓↓↓↓↓↓↓↓↓↓↓Render↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  //React says we have to define render!!
  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}


ReactDOM.render(<App />, document.querySelector("#root"));
