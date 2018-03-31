import React from 'react'
import { Heading, NavbarItem } from 'bloomer'
import { translate } from 'react-i18next'

import Icon from '../Icon'

const HomeButton = ({ t, url }) =>
  url ? (
    <NavbarItem href={url} target="_blank" rel="noopener noreferrer">
      <Heading
        tag="span"
        isHidden="touch"
        style={{ marginBottom: 0, marginRight: 8 }}
      >
        {t('navbar.home')}
      </Heading>
      <Icon name="home" />
    </NavbarItem>
  ) : null

export default translate()(HomeButton)
