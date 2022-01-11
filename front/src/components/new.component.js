import React, { Component } from "react";
import NavBar from "./navigation.component";
import { Box, Form, Button, FormField, TextInput } from "grommet";
import HoldingsDataService from "../services/holdings.service";

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
      <div>
        <NavBar />
        <Box align="center" pad="large">
          <Form onSubmit={this.onSubmitHandler}>
            <FormField name="name" htmlFor="text-input-id" label="Name">
              <TextInput
                id="text-input-id"
                name="name"
                label="Name"
                value={this.state.name}
                onChange={this.onChangeHandler}
              />
            </FormField>
            <FormField name="amount" htmlFor="text-input-id" label="Amount">
              <TextInput
                id="text-input-id"
                name="amount"
                label="Amount"
                value={this.state.amount}
                onChange={this.onChangeHandler}
              />
            </FormField>
            <FormField
              name="totalCost"
              htmlFor="text-input-id"
              label="Total Cost"
              value={this.state.totalCost}
              onChange={this.onChangeHandler}
            >
              <TextInput id="text-input-id" name="totalCost" />
            </FormField>
            <FormField
              name="averagePrice"
              htmlFor="text-input-id"
              label="Average Price"
              value={this.state.averagePrice}
              onChange={this.onChangeHandler}
            >
              <TextInput id="text-input-id" name="averagePrice" />
            </FormField>
            <FormField
              name="amountSold"
              htmlFor="text-input-id"
              label="Amount Sold"
              value={this.state.amountSold}
              onChange={this.onChangeHandler}
            >
              <TextInput id="text-input-id" name="amountSold" />
            </FormField>
            <FormField
              name="totalValueSold"
              htmlFor="text-input-id"
              label="Total Value Sold"
              value={this.state.totalValueSold}
              onChange={this.onChangeHandler}
            >
              <TextInput id="text-input-id" name="totalValueSold" />
            </FormField>
            <Box direction="row" gap="medium">
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
