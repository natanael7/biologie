import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class Cell extends Component {
  render() {
    let size = this.props.size;
    return (
      <Grid item style={{ width: `${size}%` }}>
        <Paper className={this.props.class}>{this.props.value}</Paper>
      </Grid>
    );
  }
}

export default Cell;
