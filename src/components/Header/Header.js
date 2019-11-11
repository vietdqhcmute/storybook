import React, { Component } from "react";
import "./Header.scss";
class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="">
        <div className="header">
          <div className="header__brand">
            <a className="navbar-brand"></a>
          </div>
          <div className="header__content">
            <div className="collapse navbar-collapse">
              <div className="navbar-nav"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
