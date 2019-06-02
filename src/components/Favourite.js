import React, { Component } from "react";
import { FaSearch, FaHeart } from "react-icons/fa";

export class Favourite extends Component {
  render() {
    return (
      <div className="RightContainer">
        <div className="SearchContainer">
          <form action="" onSubmit={this.props.onFormSubmit}>
            <input
              type="text"
              placeholder="Enter keyword..."
              onChange={this.props.onKeywordChange}
              //  value={this.props.keyword}
            />
            <FaSearch />
          </form>
        </div>
        <div className="FavouriteContainer">
          <div className="FavouriteTitle">
            <h2 className="HeaderBooks">Favourite</h2>
            <FaHeart className="FavouriteHeart" />
          </div>
          <div className="FavouriteItems">
            {this.props.itemsbuffer.map(item =>
              item.isFavourite == true ? (
                <div className="FavouriteItem">
                  <img
                    src={require("../book.jpg")}
                    alt="book picture"
                    className="FavouriteImage"
                  />
                  <div className="FavouriteItemNameAndReview">
                    <h4 className="HeaderBooks">{item.itemName}</h4>
                    <p className="FavouriteReview">
                      {" "}
                      ocjena{" "}
                      {(
                        item.starReviewValueCounter / item.reviewCounter
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Favourite;
