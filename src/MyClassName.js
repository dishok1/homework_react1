import { Component } from "react";

class MyClassName extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Dima" };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default MyClassName;
