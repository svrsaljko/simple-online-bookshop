import React from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

class Items extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className="HomeContainer">
        <h2 className="HeaderBooks">Books:</h2>
        <div className="ItemContainer">
          {items.items.map(item => {
            return (
              <div className="Item" key={item.id}>
                <Link to={"/details/" + item.id} className="Link">
                  <div className="TitleAndReview">
                    <p className="Title"> {item.itemName} </p>
                    <p style={{ margin: "0.5rem" }}>
                      ocjena{" "}
                      {(
                        item.starReviewValueCounter / item.reviewCounter
                      ).toFixed(2)}{" "}
                      {"  "}
                      na temelju {item.reviewCounter} recenzije
                    </p>
                  </div>
                  <div className="ImageAndDescription">
                    <img
                      src={require("../book.jpg")}
                      alt="this is book picture"
                    />
                    <div className="ItemDescription">
                      <p>
                        this is image description....this is image
                        description....this is image description.
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="FavouritesAndStars">
                  <div
                    onClick={() => {
                      this.props.addToFavourites(item.id);
                    }}
                    className="Heart"
                    style={{ color: item.isFavourite ? "brown" : "gold" }}
                  >
                    <FaHeart />
                  </div>
                  <div className="EmptyContainer"> </div>
                  <div className="Stars">
                    {item.stars.map(star => {
                      return (
                        <FaStar
                          style={{
                            color: star.isHover ? "brown" : "gold",
                            cursor: star.isHover ? "pointer" : "default",
                            cursor: star.cursorPointer ? "default" : "pointer"
                          }}
                          onClick={() => {
                            if (!item.reviewRestriction) {
                              this.props.onStarClick(star.value, item.id);
                            }
                          }}
                          className="Star"
                          onMouseOver={() => {
                            if (
                              star.isActive == false &&
                              item.reviewRestriction == false
                            ) {
                              this.props.onStarHover(star.value, item.id);
                            }
                          }}
                          onMouseLeave={() => {
                            if (
                              star.isActive == false &&
                              item.reviewRestriction == false
                            ) {
                              this.props.onRemoveHover(item.id);
                            }
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Items;
