import { Grommet } from "grommet";
import { Routes, Route } from "react-router-dom";
import Charts from "./components/charts.components.js";
import Holdings from "./components/holdings.components.js";
import Trades from "./components/trades.component.js";
import NewHolding from "./components/newHolding.component.js";
import NewTrade from "./components/newTrade.component.js";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Routes>
        <Route exact path="/" element={<Holdings />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/new_holding" element={<NewHolding />} />
        <Route exact path="/new_trade" element={<NewTrade />} />
      </Routes>
    </Grommet>
  );
}

export default App;