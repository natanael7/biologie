import React, { Component } from "react";
import Cell from "./Cell";

const Cells = (props) => {
  return (
    <>
      {props.cells.map((cell, index) => (
        <Cell
          index={index}
          key={cell}
          size={100 / props.size}
          value={cell}
          class={props.class}
        ></Cell>
      ))}
    </>
  );
};
class Row extends Component {
  render() {
    return (
      <React.Fragment>
        <Cells
          cells={this.props.data}
          class={this.props.class}
          size={this.props.data.length}
        ></Cells>
      </React.Fragment>
    );
  }
}

export default Row;
