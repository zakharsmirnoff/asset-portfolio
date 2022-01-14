import { React, Component } from "react";
import NavBar from "./navigation.component";
import HoldingsDataService from "../services/holdings.service.js";
import AssetTable from "./table";

class Holdings extends Component {
  constructor(props) {
    super(props);
    this.getAllHoldings = this.getAllHoldings.bind(this);
    this.state = {
      holdingsData: [],
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

  render() {
    return (
      <div>
        <NavBar />
        <AssetTable columns={this.columns} data={this.state.holdingsData} />
      </div>
    );
  }
}

export default Holdings;
