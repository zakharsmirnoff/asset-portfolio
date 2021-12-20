import React, { Component } from "react";
import NavBar from "./navigation.component";
import { Box, Form } from "grommet";

class NewHolding extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Box align="center" pad="xlarge">
          <Form></Form>
        </Box>
      </div>
    );
  }
}

export default NewHolding;
