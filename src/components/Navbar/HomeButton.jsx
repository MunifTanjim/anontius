import React from 'react'
import { Heading, NavbarItem } from 'bloomer'

import Icon from '../Icon'

const HomeButton = ({ url }) =>
  url ? (
    <NavbarItem href={url} target="_blank" rel="noopener noreferrer">
      <Heading
        tag="span"
        isHidden="touch"
        style={{ marginBottom: 0, marginRight: 8 }}
      >
        Home
      </Heading>
      <Icon name="home" />
    </NavbarItem>
  ) : null

export default HomeButton
