import { React, Component } from "react";
import Holdings from "./holdings.components";
import NavBar from "./navigation.component";
import Trades from "./trades.component";
import Charts from "./charts.components";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelName: "",
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(event) {
    console.log(event.target.innerText)
    this.setState({
      labelName: event.target.innerText,
    });
  }

  render() {
    let element;
    if (this.state.labelName === "Holdings") {
      element = <Holdings />;
    } else if (this.state.labelName === "Trades") {
      element = <Trades />;
    } else if (this.state.labelName === "Charts") {
      element = <Charts />;
    } else {
      element = <NavBar buttonHandler={this.buttonHandler} />;
    }

    return <div>{element}</div>;
  }
}

export default HomePage;
