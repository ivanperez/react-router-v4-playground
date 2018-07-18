import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './SidebarWithStyles.css'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/home",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

class SidebarWithState extends Component {



  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: "#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <NavLink
                  to="/home"
                  name='home'
                  activeClassName='active'
                // onClick={this.handleItemClick}
                >
                  Home2
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bubblegum"
                  name='bubblegum'
                  activeClassName='active'
                // onClick={this.handleItemClick}
                >
                  Bubblegum2
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shoelaces"
                  name='shoelaces'
                  activeClassName='active'
                // onClick={this.handleItemClick}
                >
                  Shoelaces2
                </NavLink>
              </li>
            </ul>

            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    )
  }
};

export default SidebarWithState;