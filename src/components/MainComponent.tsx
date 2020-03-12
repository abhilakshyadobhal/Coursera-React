import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
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
          <Route exact path='/contact' component={Contact} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
