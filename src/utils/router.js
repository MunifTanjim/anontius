import React from 'react'
import { Redirect as ReactRouterRedirect, Route } from 'react-router-dom'

export const Redirect = props =>
  props.location.search ? (
    <ReactRouterRedirect
      {...props}
      to={{ pathname: props.to, search: props.location.search }}
    />
  ) : (
    <ReactRouterRedirect {...props} />
  )

export const SimpleRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...rest} {...props} />} />
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
        <Component {...rest} {...props} />
      ) : (
        <Redirect to={fallbackPath} {...props} />
      )
    }
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
        <Redirect to={fallbackPath} {...props} />
      ) : (
        <Component {...rest} {...props} />
      )
    }
  />
)
