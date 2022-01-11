import React, { Component } from "react";
import NavBar from "./navigation.component";
import HoldingsDataService from "../services/holdings.service";
import InputForm from "./inputform.component";
import { Form, Box } from 'grommet'

class NewHolding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      totalCost: "",
      averagePrice: "",
      amountSold: "",
      totalValueSold: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    let value = event.target.value;
    this.setState({ [event.target.name]: value });
  }

  onSubmitHandler() {
    let data = {
      name: this.state.name,
      amount: parseFloat(this.state.amount),
      totalCost: parseFloat(this.state.totalCost),
      averagePrice: parseFloat(this.state.averagePrice),
      amountSold: parseFloat(this.state.amountSold),
      totalValueSold: parseFloat(this.state.totalValueSold),
    };
    HoldingsDataService.create(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
        <div></div>
    );
  }
}

export default NewHolding;
