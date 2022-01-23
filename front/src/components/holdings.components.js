import { React, Component } from "react";
import NavBar from "./navigation.component";
import HoldingsDataService from "../services/holdings.service.js";
import AssetTable from "./table";
import { Button, Box } from "grommet";
import NewHolding from "./newHolding.component";

class Holdings extends Component {
  constructor(props) {
    super(props);
    this.getAllHoldings = this.getAllHoldings.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = {
      holdingsData: [],
      buttonClicked: false,
    };
    this.columns = [
      { property: "name", header: "Name", primary: true },
      { property: "amount", header: "Amount" },
      { property: "totalCost", header: "Total Cost" },
      { property: "averagePrice", header: "Average Price" },
      { property: "amountSold", header: "Amount Sold" },
      { property: "totalValueSold", header: "Total Value Sold" },
    ];
  }

  componentDidMount() {
    this.getAllHoldings();
  }

  getAllHoldings() {
    HoldingsDataService.getAll()
      .then((response) => {
        this.setState({ holdingsData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  buttonHandler() {
    this.setState({
      buttonClicked: true,
    });
  }

  render() {
    if (this.state.buttonClicked) {
      return <NewHolding />;
    } else {
      return (
        <div>
          <NavBar />
          <AssetTable columns={this.columns} data={this.state.holdingsData} />
          <Box align="center" pad="medium">
            <Button
              primary
              label="Add a new holding"
              onClick={this.buttonHandler}
            ></Button>
          </Box>
        </div>
      );
    }
  }
}

export default Holdings;
