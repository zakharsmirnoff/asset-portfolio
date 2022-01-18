import React, { Component } from "react";
import NavBar from "./navigation.component";
import TradesDataService from "../services/trades.service";
import { Form, Box, FormField, TextInput, Button } from "grommet";

class NewTrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trade: "",
      amount: 0,
      price: 0,
      totalValue: 0,
      purchasePrice: 0,
      profit: 0,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onResetHandler = this.onResetHandler.bind(this);
  }

  onChangeHandler(value) {
    this.setState({
      trade: value.trade,
      amount: value.amount,
      price: value.price,
      totalValue: parseFloat(value.amount) * parseFloat(value.price),
      purchasePrice: value.purchasePrice,
      profit: parseInt(value.purchasePrice) === 0 ? 0 : (value.price / value.purchasePrice * 100) - 100
    });
  }

  onResetHandler() {
    this.setState({
      trade: "",
      amount: 0,
      price: 0,
      totalValue: 0,
      purchasePrice: 0,
      profit: 0,
    });
  }

  onSubmitHandler() {
    console.log(this.state);
    let data = {
      trade: this.state.trade,
      amount: parseFloat(this.state.amount),
      price: parseFloat(this.state.price),
      totalValue: parseFloat(this.state.totalValue),
      purchasePrice: parseFloat(this.state.purchasePrice),
      profit: parseFloat(this.state.profit),
    };
    TradesDataService.create(data)
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        alert("The trade was succesfully added!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let array = [];
    for (const value in this.state) {
      array.push(value);
    }
    let elements = array.map((value, key) => {
      return (
        <FormField label={value} key={key} name={value}>
          <TextInput key={key} name={value} />
        </FormField>
      );
    });
    return (
      <div>
        <NavBar />
        <Box pad="large" align="center">
          <Form
            value={this.state}
            onSubmit={this.onSubmitHandler}
            onChange={(value) => this.onChangeHandler(value)}
            onReset={this.onResetHandler}
          >
            {elements}
            <Box direction="row" gap="medium" pad="large">
              <Button type="submit" primary label="Submit" />
              <Button type="reset" label="Reset" />
            </Box>
          </Form>
        </Box>
      </div>
    );
  }
}

export default NewTrade;
