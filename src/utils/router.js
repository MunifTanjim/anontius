import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const SimpleRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
)

export const PrivateRoute = ({
  component: Component,
  authed,
  fallbackPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authed ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to={fallbackPath} />
      )}
  />
)

export const PublicRoute = ({
  component: Component,
  authed,
  fallbackPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authed ? (
        <Redirect to={fallbackPath} />
      ) : (
        <Component {...props} {...rest} />
      )}
  />
)
