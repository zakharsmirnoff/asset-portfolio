import { React, Component } from "react";
import axios from "axios";
import NavBar from "./navigation.component";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.fetchingData = this.fetchingData.bind(this);
    this.state = {
      values: [],
    };
  }

  componentDidMount() {
    this.fetchingData();
  }

  fetchingData() {
    const url = "https://api.alternative.me/fng/?limit=5";
    axios
      .get(url)
      .then((response) => {
        this.setState({ values: response.data.data.reverse() });
        console.log(this.state.values);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <NavBar />;
  }
}

export default Charts;
