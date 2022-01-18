import { React, Component } from "react";
import { Box, DataTable } from "grommet";

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
      </div>
    );
  }
}

export default AssetTable;
