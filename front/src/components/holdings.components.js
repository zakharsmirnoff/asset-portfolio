import { React, Component } from "react";
import NavBar from "./navigation.component";
import HoldingsDataService from "../services/holdings.service.js";
import { DataTable, Box } from "grommet";

class Holdings extends Component {
  constructor(props) {
    super(props);
    this.getAllHoldings = this.getAllHoldings.bind(this);
    this.state = {
      holdingsData: [],
    };
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

  render() {
    return (
      <div>
        <NavBar />
        <Box align="center" pad="xlarge">
          <DataTable
            columns={[
              { property: "name", header: "Name", primary: true },
              { property: "amount", header: "Amount" },
              { property: "totalCost", header: "Total Cost" },
              { property: "averagePrice", header: "Average Price" },
              { property: "amountSold", header: "Amount Sold" },
              { property: "totalValueSold", header: "Total Value Sold" },
            ]}
            data={this.state.holdingsData}
            border={true}
          />
        </Box>
      </div>
    );
  }
}

export default Holdings;
