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
    this.setState({
      labelName: event.target.innerText,
    });
  }

  render() {
    if (this.state.labelName === "Holdings") {
      return <Holdings />;
    } else if (this.state.labelName === "Trades") {
      return <Trades />;
    } else if (this.state.labelName === "Charts") {
      return <Charts />;
    } else {
      return <NavBar buttonHandler={this.buttonHandler} />;
    }
  }
}

export default HomePage;