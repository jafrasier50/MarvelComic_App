import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><NavLink to='/' activeClassName="selected">Home</NavLink></li>
          <li><NavLink to='/' activeClassName="selected">Marvel</NavLink></li>
          <li><NavLink to='/' activeClassName="selected">DC</NavLink></li>
          <li><NavLink to='/' activeClassName="selected">Posts</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
