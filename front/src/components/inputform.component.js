import React, { Component } from "react";
import { FormField, TextInput } from "grommet";

class InputForm extends Component {
  render() {
    return (
      <div>
        <FormField name={this.props.name} label="Name">
          <TextInput
            name={this.props.name}
            label={this.props.name}
            value={this.props.name}
            onChange={this.props.onChangeHandler}
          />
        </FormField>
      </div>
    );
  }
}

export default InputForm;
