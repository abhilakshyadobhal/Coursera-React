import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { DISHES } from '../data/dishes';
import { COMMENTS } from '../data/comments';
import { PROMOTIONS } from '../data/promotions';
import { LEADERS } from '../data/leaders';

class Main extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish: any) => dish.featured)[0]}
          promotion={
            this.state.promotions.filter((promo: any) => promo.featured)[0]
          }
          leader={
            this.state.leaders.filter((leader: any) => leader.featured)[0]
          }
        />
      );
    };
    const DishWithId = ({ match }: any) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish: any) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment: any) =>
              comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route
            exact
            path='/menu'
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contact' component={Contact} />} />
          <Route
            exact
            path='/aboutus'
            component={() => <About leaders={this.state.leaders} />}
          />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
