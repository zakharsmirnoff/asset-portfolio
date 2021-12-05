import { React, Component } from "react";
import { Box, Nav, Button, Heading, CheckBox } from "grommet";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
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
            href="/holdings"
          />
          <Button
            label="Charts"
            color="control"
            primary={true}
            size="large"
            href="/charts"
          />
          <Button
            label="Trades"
            color="control"
            primary={true}
            size="large"
            href='/trades'
          />
          <CheckBox label="Dark mode" toggle={true} />
        </Nav>
      </Box>
    );
  }
}

export default NavBar;
