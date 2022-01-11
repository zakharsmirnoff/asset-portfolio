import { React, Component } from "react";
import NavBar from "./navigation.component";
import TradesDataService from "../services/trades.service";

class Trades extends Component {
  constructor(props) {
    super(props);
    this.getAllTrades = this.getAllTrades.bind(this);
    this.state = {
      tradesData: [],
    };
  }

  componentDidMount() {
    this.getAllTrades();
  }

  getAllTrades() {
    TradesDataService.getAll()
      .then((response) => {
        this.setState({ tradesData: response });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <NavBar />;
  }
}

export default Trades;
