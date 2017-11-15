import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Tab, TabLink } from 'bloomer'

const NavBarTab = ({ to, exact, ...rest }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <Tab isActive={match}>
        <TabLink render={() => <NavLink to={to} exact={exact} {...rest} />} />
      </Tab>
    )}
  />
)

export default NavBarTab
