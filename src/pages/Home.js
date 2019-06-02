import React, { Component } from "react";
import Header from "../components/Header";
import Favourite from "../components/Favourite";
import Items from "../components/Items";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Favourite
          onKeywordChange={this.props.onKeywordChange}
          onFormSubmit={this.props.onFormSubmit}
          items={this.props.items}
          keyword={this.props.keyword}
          itemsbuffer={this.props.itemsbuffer}
        />
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
