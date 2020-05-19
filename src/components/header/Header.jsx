import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isactive: false
    };
  }

  handleActive = value => {
    this.setState({
      isactive: value
    });
  };

  render() {
    let { isactive } = this.state;
    return (
      <>
        <div className="header">
          <div className="wrapper rwrapper spacebet-flex nav-menu">
            <Link className="logo " to="/">
              Villamart
            </Link>
            <nav className="nav-items r-d-none">
              {[
                'Home',
                'About',
                'Famers',
                'Local Brands',
                'Retailers',
                'contact'
              ].map((item, index) => (
                <NavLink
                  to={
                    item === 'Home'
                      ? '/'
                      : `/${item.toLowerCase().split(' ').join('')}`
                  }
                  exact
                  className="nav-item"
                  activeClassName="selected-nav-item"
                  key={index}
                >
                  {item}
                </NavLink>
              ))}
            </nav>
            <TiThMenu
              className="nav-hamburger d-none r-d-inline"
              onClick={() => this.handleActive(true)}
            />
          </div>
        </div>
        {/* active mobile page */}
        {isactive ? (
          <section className="header-trans">
            <div className="active-header-sec header d-none r-d-inline">
              <div className="wrapper rwrapper">
                <div className="spacebet-flex active-header">
                  <Link
                    className="logo "
                    to="/"
                    onClick={() => this.handleActive(false)}
                  >
                    Villamart
                  </Link>
                  <MdClose
                    className="active-header-close-btn"
                    onClick={() => this.handleActive(false)}
                  />
                </div>
                <div className="active-nav-menu">
                  <nav className="nav-items">
                    {[
                      'Home',
                      'About',
                      'Famers',
                      'Local Brands',
                      'Retailers',
                      'contact'
                    ].map((item, index) => (
                      <NavLink
                        to={
                          item === 'Home'
                            ? '/'
                            : `/${item.toLowerCase().split(' ').join('')}`
                        }
                        exact
                        className="nav-item d-block rpd-vertical-1rem"
                        activeClassName="selected-nav-item rpd-vertical-1rem"
                        onClick={() => this.handleActive(false)}
                        key={index}
                      >
                        {item}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default Header;
