import React, { Component } from "react";
import Table from "./components/Table";
import InputPage from "./components/InputPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      data: [],
    };
  }
  handler(data) {
    this.setState({
      data: data,
    });
  }
  fetchToggle = () => {
    this.setState({
      fetchToggle: !this.state.fetchToggle,
    });
  };
  componentDidUpdate(prevprops, prevstate) {
    console.log(1);
  }
  componentDidMount() {
    console.log(2);
  }
  render() {
    if (this.state.data.length !== 0)
      return <Table className="Table" data={this.state.data}></Table>;
    else return <InputPage handler={this.handler}></InputPage>;
  }
}
export default App;

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handler = this.handler.bind(this);
//   }

//   handler() {
//     this.setState({
//       someVar: "some value",
//     });
//   }

//   render() {
//     return <Child handler={this.handler} />;
//   }
// }

// class Child extends React.Component {
//   render() {
//     return <Button onClick={this.props.handler} />;
//   }
// }
