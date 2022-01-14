import { React, Component } from "react";
import { Box, Button, DataTable } from "grommet";

class AssetTable extends Component {
  render() {
    return (
      <div>
        <Box align="center" pad="small">
          <DataTable
            columns={this.props.columns}
            data={this.props.data}
            border={true}
          />
        </Box>
        <Box align="center" pad="medium">
          <Button primary label="Add a new "></Button>
        </Box>
      </div>
    );
  }
}

export default AssetTable;
