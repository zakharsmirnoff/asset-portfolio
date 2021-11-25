import { React, Component } from "react";
import { Box, Nav, Button, Heading, CheckBox } from "grommet";
import HoldingsDataService from "../services/holdings.service.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this.redirectHandler = this.redirectHandler.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    HoldingsDataService.getAll()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  redirectHandler() {
    return;
  }

  render() {
    return (
      <Box fill="vertical" overflow="auto" align="stretch" flex="grow">
        <Nav
          align="center"
          flex="false"
          direction="row"
          justify="center"
          pad="medium"
        >
          <Heading margin={{ right: "xlarge" }} textAlign="start" level="1">
            Portfolio
          </Heading>
          <Button
            label="Holdings"
            color="control"
            primary={true}
            size="large"
          />
          <Button
            label="Charts"
            color="control"
            primary={true}
            size="large"
            onClick={this.redirectHandler}
          />
          <Button
            label="Trades"
            color="control"
            primary={true}
            size="large"
            onChange={(event) => {
              this.setState({ checked: event.target.checked });
            }}
          />
          <CheckBox label="Dark mode" toggle={true} />
        </Nav>
      </Box>
    );
  }
}

export default NavBar;
