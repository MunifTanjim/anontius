import React from 'react'
import { Heading, NavbarItem } from 'bloomer'
import { Link } from 'react-router-dom'

import Icon from '../Icon'

const Logo = ({ title }) => (
  <NavbarItem render={props => <Link to="/" {...props} />}>
    <Icon name="message-square" />
    <Heading
      tag="span"
      isHidden="touch"
      style={{ marginBottom: 0, marginLeft: 8 }}
    >
      {title}
    </Heading>
  </NavbarItem>
)

export default Logo
