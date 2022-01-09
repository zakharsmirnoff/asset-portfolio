import React, { Component } from "react";
import NavBar from "./navigation.component";
import { Box, Form, Button, FormField, TextInput } from "grommet";

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
  }

  onChangeHandler(event) {
    let value = event.target.value;
    this.setState({ [event.target.name]: value });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Box align="center" pad="xlarge">
          <Form
            value={this.state.value}
            onChange={this.onChangeHandler}
            onSubmit={({ value }) => {}}
            >
            <FormField name="name" htmlFor="text-input-id" label="Name">
              <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField name="amount" htmlFor="text-input-id" label="Amount">
              <TextInput id="text-input-id" name="amount" />
            </FormField>
            <FormField
              name="totalCost"
              htmlFor="text-input-id"
              label="Total Cost"
            >
              <TextInput id="text-input-id" name="totalCost" />
            </FormField>
            <FormField
              name="averagePrice"
              htmlFor="text-input-id"
              label="Average Price"
            >
              <TextInput id="text-input-id" name="averagePrice" />
            </FormField>
            <FormField
              name="amountSold"
              htmlFor="text-input-id"
              label="Amount Sold"
            >
              <TextInput id="text-input-id" name="amountSold" />
            </FormField>
            <FormField
              name="totalValueSold"
              htmlFor="text-input-id"
              label="Total Value Sold"
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
