import React, { Component } from "react";
import Items from "../components/Items";
class Home extends Component {
  render() {
    return (
      <div>
        <Items
          onRemoveHover={this.props.onRemoveHover}
          onStarHover={this.props.onStarHover}
          onStarClick={this.props.onStarClick}
          addToFavourites={this.props.addToFavourites}
          items={this.props}
        />
      </div>
    );
  }
}

export default Home;
