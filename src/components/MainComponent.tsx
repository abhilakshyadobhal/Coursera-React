import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import DishDetail from "./DishdetailComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../data/dishes";
import { COMMENTS } from "../data/comments";
import { PROMOTIONS } from "../data/promotions";
import { LEADERS } from "../data/leaders";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addComment, fetchDishes } from "../redux/ActionCreators";
import { actions } from "react-redux-form";

class Main extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish: any) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo: any) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader: any) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }: any) => {
      return (
        <DishDetail
          dish={this.props.dishes.dishes.filter((dish: any) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter((comment: any) => comment.dishId === parseInt(match.params.dishId, 10))}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route
              exact
              path="/contactus"
              component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}
            />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  addComment: (dishId: any, rating: any, author: any, comment: any) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
