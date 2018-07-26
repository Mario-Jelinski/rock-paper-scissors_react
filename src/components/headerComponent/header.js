import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>rock paper scissors {this.props.foo}</h1>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;
