import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/add-movie'>Marvel</Link></li>
          <li><Link to='/counter'>DC</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
