import React, { Component } from "react";
import Items from "../components/Items";

export class Details extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    let id = this.props.id;

    this.setState({ id });
    console.log("DETAILS PROPS", this.props);
  }

  Item = () => {};

  render() {
    //console.log("DETAILS", this.Item);
    return <div style={{ marginLeft: "8rem" }}>{this.Item()}</div>;
  }
}

export default Details;
