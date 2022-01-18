import React, { Component } from "react";
import NavBar from "./navigation.component";
import HoldingsDataService from "../services/holdings.service";
import { Form, Box, FormField, TextInput, Button } from "grommet";

class NewHolding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: 0,
      totalCost: 0,
      averagePrice: 0,
      amountSold: 0,
      totalValueSold: 0,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onResetHandler = this.onResetHandler.bind(this);
  }

  onChangeHandler(value) {
    this.setState({
      name: value.name,
      amount: value.amount,
      totalCost: value.totalCost,
      averagePrice: value.averagePrice,
      amountSold: value.amountSold,
      totalValueSold: value.totalValueSold,
    });
  }

  onResetHandler() {
    this.setState({
      name: "",
      amount: 0,
      totalCost: 0,
      averagePrice: 0,
      amountSold: 0,
      totalValueSold: 0,
    });
  }

  onSubmitHandler() {
    console.log(this.state);
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
      .then(() => {
        alert("The holding was succesfully added!");
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

export default NewHolding;