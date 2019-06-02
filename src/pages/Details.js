import React, { Component } from "react";
import ItemCard from "../components/ItemCard";
import Favourite from "../components/Favourite";
export class Details extends Component {
  render() {
    return (
      <div>
        <ItemCard />
        <Favourite />
      </div>
    );
  }
}

export default Details;
