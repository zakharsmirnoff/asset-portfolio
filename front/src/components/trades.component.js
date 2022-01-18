import { React, Component } from "react";
import NavBar from "./navigation.component";
import TradesDataService from "../services/trades.service";
import AssetTable from "./table";
import { Button, Box } from "grommet";

class Trades extends Component {
  constructor(props) {
    super(props);
    this.getAllTrades = this.getAllTrades.bind(this);
    this.state = {
      tradesData: [],
    };

    this.columns = [
      { property: "trade", header: "Trade", primary: true },
      { property: "amount", header: "Amount" },
      { property: "price", header: "Price" },
      { property: "totalValue", header: "Total Value" },
      { property: "purchasePrice", header: "Purchase Price" },
      { property: "profit", header: "Profit" },
    ];
  }

  componentDidMount() {
    this.getAllTrades();
  }

  getAllTrades() {
    TradesDataService.getAll()
      .then((response) => {
        this.setState({ tradesData: response });
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
        <AssetTable columns={this.columns} data={this.state.tradesData} />
        <Box align="center" pad="medium">
          <Button primary label="Add a new trade"></Button>
        </Box>
      </div>
    );
  }
}

export default Trades;
