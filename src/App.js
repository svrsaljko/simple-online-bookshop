import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favourite from "./components/Favourite";

class App extends Component {
  state = {
    keyword: "",
    itemsbuffer: [],
    items: [
      {
        stars: [
          { value: 1, isActive: false, isHover: false, cursorPointer: false },
          { value: 2, isActive: false, isHover: false, cursorPointer: false },
          { value: 3, isActive: false, isHover: false, cursorPointer: false },
          { value: 4, isActive: false, isHover: false, cursorPointer: false },
          { value: 5, isActive: false, isHover: false, cursorPointer: false }
        ],
        id: 1,
        itemName: "Book1",
        itemDescription: "Book about bodyweight training",
        averageStarReview: 0,
        pictureUrl: "../../../assets/images/pushupinstreet.jpg",
        reviewCounter: 2,
        starReviewValueCounter: 9,
        reviewRestriction: false,
        comment: [
          {
            ordinalNumber: 1,
            userName: "user 1",
            starReview: 5,
            review: "I really liked it"
          },
          {
            ordinalNumber: 2,
            userName: "user 2",
            starReview: 4,
            review: "This is really awesome book, I recommend it to everyone"
          }
        ],
        isFavourite: false
      },
      {
        stars: [
          { value: 1, isActive: false, isHover: false, cursorPointer: false },
          { value: 2, isActive: false, isHover: false, cursorPointer: false },
          { value: 3, isActive: false, isHover: false, cursorPointer: false },
          { value: 4, isActive: false, isHover: false, cursorPointer: false },
          { value: 5, isActive: false, isHover: false, cursorPointer: false }
        ],
        id: 2,
        itemName: "Book2",
        itemDescription: "Book about cooking",
        averageStarReview: 0,
        pictureUrl: "../../../assets/images/pushupinstreet.jpg",
        starReviewValueCounter: 9,

        reviewCounter: 2,
        reviewRestriction: false,

        comment: [
          {
            ordinalNumber: 1,
            userName: "user 1",
            starReview: 5,
            review: "I really liked it"
          },
          {
            ordinalNumber: 2,
            userName: "user 2",
            starReview: 4,
            review: "This is really awesome book, I recommend it to everyone"
          }
        ],
        isFavourite: false
      },
      {
        stars: [
          { value: 1, isActive: false, isHover: false, cursorPointer: false },
          { value: 2, isActive: false, isHover: false, cursorPointer: false },
          { value: 3, isActive: false, isHover: false, cursorPointer: false },
          { value: 4, isActive: false, isHover: false, cursorPointer: false },
          { value: 5, isActive: false, isHover: false, cursorPointer: false }
        ],

        id: 3,
        itemName: "Book3",
        itemDescription: "Book about bodyweight training",
        review: "I really liked it",
        averageStarReview: 0,
        pictureUrl: "../../../assets/images/pushupinstreet.jpg",
        reviewCounter: 2,
        starReviewValueCounter: 9,
        reviewRestriction: false,

        comment: [
          {
            ordinalNumber: 1,
            userName: "user 1",
            starReview: 5,
            review: "I really liked it"
          },
          {
            ordinalNumber: 2,
            userName: "user 2",
            starReview: 4,
            review: "This is really awesome book, I recommend it to everyone"
          }
        ],

        isFavourite: true
      }
    ]
  };

  componentDidMount() {
    const { items } = this.state;
    this.setState({
      itemsbuffer: items
    });
  }

  onFormSubmit = e => {
    e.preventDefault();
    const { keyword, itemsbuffer } = this.state;
    let searchedItems = itemsbuffer.filter(item => {
      return item.itemName.toLowerCase().includes(keyword);
    });

    this.setState({
      items: searchedItems
    });
  };

  onKeywordChange = e => {
    this.setState({
      keyword: e.target.value.toLowerCase()
    });
  };

  onRemoveHover = id => {
    let items = this.state.items;
    items.map(item => {
      item.stars.map(star => {
        if (item.id == id) {
          star.isHover = false;
        }
      });
    });
    this.setState({ items });
  };

  onStarHover = (value, id) => {
    let items = this.state.items;
    items.map(item => {
      if (item.id == id) {
        let stars = item.stars;
        stars.map(star => {
          if (star.value <= value) {
            star.isHover = true;
          }
        });
      }
    });
    this.setState({
      items
    });
  };

  onStarClick = (value, id) => {
    let items = this.state.items;
    items.map(item => {
      if (item.id == id) {
        let stars = item.stars;
        item.reviewCounter++;
        item.starReviewValueCounter += value;
        item.reviewRestriction = true;
        stars.map(star => {
          star.cursorPointer = true;
          if (star.value <= value) {
            star.isActive = true;
          }
        });
      }
    });
    this.setState({
      items
    });
  };
  č;
  addToFavourites = id => {
    let items = this.state.items;
    items.forEach(item => {
      if (id == item.id) {
        item.isFavourite = !item.isFavourite;
      }
    });
    this.setState({
      items
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Favourite
          onKeywordChange={this.onKeywordChange}
          onFormSubmit={this.onFormSubmit}
          items={this.items}
          keyword={this.keyword}
          itemsbuffer={this.state.itemsbuffer}
        />
        <Router>
          <div>
            <Route
              exact
              path="/"
              //OBLIK ARROW FUNCKIJE NEOBIČAN
              render={() => (
                <Home
                  onRemoveHover={this.onRemoveHover}
                  onStarHover={this.onStarHover}
                  onStarClick={this.onStarClick}
                  addToFavourites={this.addToFavourites}
                  items={this.state.items}
                />
              )}
            />
            <Route
              path="/details/:id"
              render={props => <Details id={props.match.params.id} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
