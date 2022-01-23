import { React, Component } from "react";
import NavBar from "./navigation.component";
import TradesDataService from "../services/trades.service";
import AssetTable from "./table";
import { Button, Box } from "grommet";
import NewTrade from "./newTrade.component";

class Trades extends Component {
  constructor(props) {
    super(props);
    this.getAllTrades = this.getAllTrades.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = {
      tradesData: [],
      buttonClicked: false,
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
        this.setState({ tradesData: response.data });
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
      return <NewTrade />;
    } else {
      return (
        <div>
          <NavBar />
          <AssetTable columns={this.columns} data={this.state.tradesData} />
          <Box align="center" pad="medium">
            <Button
              primary
              label="Add a new trade"
              onClick={this.buttonHandler}
            ></Button>
          </Box>
        </div>
      );
    }
  }
}

export default Trades;
