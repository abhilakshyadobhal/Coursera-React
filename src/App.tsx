import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './data/dishes';
import './App.css';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className='App'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Foodie</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
